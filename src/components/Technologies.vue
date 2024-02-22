<template>
    <div class="container pt-5">
        <h2 class="section-title pb-4">Technologies</h2>
        <div class="row align-content-center text-center">
            <div v-for="(tech, index) in techList" :key="index" class="col-md-3 col-6 my-5">
                <img class="tech-icon tilt mx-auto img-box" :src="tech.image" @mousemove="handleMove"
                    @mouseout="handleMouseOut" @mousedown="handleMouseDown" @mouseup="handleMouseUp" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            techList: [
                { image: "https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" },
                { image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
                { image: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png" },
                { image: "https://cdn.worldvectorlogo.com/logos/next-js.svg" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
                { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeiJDfQOd-oRPt58qz2Nj0d1kcARYg-BTBvA&usqp=CAU" },
                { image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png" },
                { image: "https://www.oraylis.de/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/azure-devops-logo.png.webp" },
                { image: "https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/14a86d0f-651e-4efd-2d55-65b123378e00/preview" },
            ],
        };
    },
    methods: {
        handleMove(e) {
            const el = e.target;
            const height = el.clientHeight;
            const width = el.clientWidth;

            // Calculate the tilt based on the position of the mouse within a larger area
            const xVal = e.offsetX || e.layerX || 0;
            const yVal = e.offsetY || e.layerY || 0;

            const yRotation = 120 * ((xVal - width / 2) / width);
            const xRotation = -120 * ((yVal - height / 2) / height);

            const string = `perspective(500px) scale(1.3) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            el.style.transform = string;
        },
        handleMouseOut(e) {
            const el = e.target;
            el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
        },
        handleMouseDown(e) {
            const el = e.target;
            el.style.transform = 'perspective(500px) scale(0.7) rotateX(0) rotateY(0)';
        },
        handleMouseUp(e) {
            const el = e.target;
            el.style.transform = 'perspective(500px) scale(1.3) rotateX(0) rotateY(0)';
        },
    },
};
</script>

<style scoped>
.tech-icon {
    width: 180px;
    height: 180px;
    transition: transform 0.1s;
}



.img {
    display: block;
}
</style>