<template>
    <div>
        <div class="container mt-4">
            <div class="row">
                <div class="col-md-6" v-for="project in projects" :key="project.id">
                    <div class="project-box" @click="openModal(project)">
                        <img :src="project.image" class="img-fluid" alt="Project Image">
                        <h3>{{ project.title }}</h3>
                        <p>{{ project.company }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" ref="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="projectModalLabel" v-if="selectedProject">{{ selectedProject.title }}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" v-if="selectedProject">
                        <img :src="selectedProject.image" class="img-fluid" alt="Project Image">
                        <p>{{ selectedProject.description }}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Project 1',
                    company: 'Company A',
                    image: './src/components/images/projects/sign-me-in.png',
                    description: 'Description for Project 1...',
                },
                {
                    id: 2,
                    title: 'Project 2',
                    company: 'Company B',
                    image: './src/components/images/projects/mcleodHealth.jpg',
                    description: 'Description for Project 2...',
                },
                {
                    id: 3,
                    title: 'Project 3',
                    company: 'Company C',
                    image: './src/components/images/projects/bossybooks.png',
                    description: 'Description for Project 3...',
                },
            ],
            selectedProject: null,
        };
    },
    methods: {
        openModal(project) {
            this.selectedProject = project;
            const modal = new bootstrap.Modal(this.$refs.projectModal, {
                keyboard: false,
            });
            modal.show();
        },
    },
};
</script>

<style>
/* Add your custom styles for project boxes if needed */
.project-box {
    cursor: pointer;
    border: 1px solid #ddd;
    padding: 15px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s;
}

.project-box:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
