<template>
    <div class="d-flex justify-content-start padding-projects mt-5" id="featured-work">
        <div class="container">
            <div class="section-title">
                <h2>Projects</h2>
            </div>
            <div v-for="(project, index) in projects" :key="index" @click="openModal(index)" data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <div class="row pb-4" v-if="index % 2 === 0">
                    <div class="col-md-6">
                        <div class="project-box">
                            <div class="project-card">
                                <img :src="project.image" alt="Project Image" class="img-fluid">
                                <div class="project-info">
                                    <h4>{{ project.name }}</h4>
                                    <p>{{ project.company }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Check if there is another project for the second column -->
                    <div v-if="index + 1 < projects.length" class="col-md-6">
                        <div class="project-box">
                            <div class="project-card">
                                <img :src="projects[index + 1].image" alt="Project Image" class="img-fluid">
                                <div class="project-info">
                                    <h4>{{ projects[index + 1].name }}</h4>
                                    <p>{{ projects[index + 1].company }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" v-if="selectedProject !== null" id="exampleModal" tabindex="-1"
            aria-labelledby="exampleModalLabel" aria-hidden="true"> aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ selectedProject.name }}</h5>
                        <button type="button" class="btn-close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body" v-if="selectedProject !== null">
                        <img :src="selectedProject.image" alt="Project Image" class="img-fluid">
                        <p>{{ selectedProject.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const projects = [
    {
        name: 'Sign Me In',
        company: 'FDTC',
        image: './src/components/images/projects/sign-me-in.png',
        description: 'Description of Project 1.',
    },
    {
        name: 'Morgue Tracker',
        company: 'McLeod Health',
        image: './src/components/images/projects/mcleodHealth.jpg',
        description: 'Description of Project 2.',
    },
    {
        name: 'Bossy Books',
        company: 'FMU',
        image: "/src/components/images/projects/bossybooks.png",
        description: 'Description of Project 3.',
    },
];

let selectedProject = null;

const openModal = (index) => {
    selectedProject = projects[index];
    console.log(selectedProject)
};

const closeModal = () => {
    selectedProject = "Modal Closed";
};

</script>

<style scoped>
.project-card {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #eee;
    padding: 100px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.project-card:hover {
    background-color: #959494;
    border-radius: 8px;

}

.project-info {
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    transition: opacity 0.3s;
    opacity: 0;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

}

.project-card:hover .project-info {
    opacity: 1;
    /* Show text on hover */
}
</style>
