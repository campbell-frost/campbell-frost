<template>
    <div class="d-flex justify-content-start padding-projects mt-5" id="featured-work">
        <div class="container">
            <div v-for="(project, index) in projects" :key="index" @click="openModal(index)">
                <div class="row" v-if="index % 2 === 0">
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
        <div class="modal fade" v-if="selectedProject !== null" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
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
};

const closeModal = () => {
    selectedProject = null;
};
</script>

<style scoped>
.project-card {
    width: 100%;
    height: 100%;
    background-color: #eee;
    padding: 100px;
    /* Adjust the padding value as needed */
    cursor: pointer;
    transition: background-color 0.3s;
}

.project-card:hover {
    background-color: #959494;

}

.project-info {
    display: none;
    /* Initially hide text */
    color: white;
}

.project-card:hover .project-info {
    display: block;
    /* Show text on hover */
}</style>
