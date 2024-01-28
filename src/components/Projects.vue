<template>
    <div>
        <div class="container mt-4">
            <div class="section-title pb-4">
                <h2>Projects</h2>
            </div>
            <div class="row">
                <div class="col-md-6" v-for="project in projects" :key="project.id">
                    <div class="project-box" @click="openModal(project)">
                        <div class="info">

                            <h3>{{ project.title }}</h3>
                            <p>{{ project.company }}</p>
                        </div>
                        <img :src="project.image" class="img-box" alt="Project Image">
                                                    
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal" ref="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
            <div class="modal-dialog mx-auto"> <!-- Add mx-auto here -->
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
                    title: 'Sign Me In',
                    company: 'Florence Darlingon Technical College',
                    image: './images/sign-me-in.png',
                    description: 'Sign-Me-In is a full stack web app designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info.The project was developed using Blazor on .NET 8, Azure SQL, VS- Code, and GitHub in an Agile / Scrum environment.',
                },
                {
                    id: 2,
                    title: 'Morgue Tracker',
                    company: 'McLeod Health',
                    image: './images/mcleodHealth.png',
                    description: 'Morgue Tracker is a mobile friendly full stack web app intended for employees at the McLeod morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.The app was developed during an internship using ASP.NET MVC, GitHub, and Visual Studio.',
                },
                {
                    id: 3,
                    title: 'Bossy Books',
                    company: 'Francis Marion University',
                    image: './images/bossybooks.png',
                    description: 'Bossy Books is a full stack web app made with Next.js and React that allows small businesses to manage customer and invoice information.',
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

<style scoped>
/* Add your custom styles for project boxes if needed */
.project-box {
    cursor: pointer;
    border: 1px solid #b3b3b3;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    padding-top: 50px;
    background-color: #b3b3b3;
    border-radius: 8px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s, background-color 0.3s;
}

.img-box {
    width: 100%;
    border-radius: 4px;
    transition: opacity 500ms ease 0s;
}

.info {
    color: #b3b3b3;
    font-family: CircularStdBold;
    transition: color 0.3s;
}

.project-box:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #757575;

}

.project-box:hover .info {
    color: white;

}

.modal-content {
    width: 1000px;
}

.section-title {
    font-family: CircularStdBold;
}
</style>
