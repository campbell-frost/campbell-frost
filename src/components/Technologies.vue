<template>
    <div class="container">
        <h2 class="section-title pb-4">Technologies</h2>
        <div class="row align-content-center text-center">
            <div v-for="(tech, index) in techList" :key="index" class="col-md-3 col-6 my-5">
                <img class="tech-icon tilt mx-auto" :src="tech.image" @mousemove="handleMove" @mouseout="handleMouseOut"
                    @mousedown="handleMouseDown" @mouseup="handleMouseUp" />
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
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" },
                { image: "/images/net8.png" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" },
                { image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" },
                { image: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" },
            ],
        };
    },
    methods: {
        handleMove(e) {
            const el = e.target;
            const height = el.clientHeight;
            const width = el.clientWidth;
            const xVal = e.layerX;
            const yVal = e.layerY;
            const yRotation = 80 * ((xVal - width / 2) / width);
            const xRotation = -80 * ((yVal - height / 2) / height);
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
    width: 80px;
    height: 80px;

}

.tech-icon2 {
    width: 95px;
    height: 80px;

}

.tech-icon3 {
    width: 80px;
    height: 90px;

}

.tech-icon,
.tech-icon2,
.tech-icon3 {
    display: block;

    margin: 0 auto;
    transition: box-shadow 0.1s, transform 0.1s;
}

.tech-icon:hover,
.tech-icon2:hover,
.tech-icon3:hover {
    cursor: pointer;
}

.img {
    display: block;
}
</style>