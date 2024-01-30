<template>
    <div>
        <div class="container mt-4">
            <h2 class="section-title pb-4">Projects</h2>
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
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body" v-if="selectedProject">
                        <div class="img-box-modal">
                            <button type="button" class="btn btn-close close-button"
                                data-bs-dismiss="modal"></button>
                            <img :src="selectedProject.image" class="img-fluid" alt="Project Image">
                        </div>
                        <div class="description py-3 px-4">
                            <h5 id="projectModalLabel" class="pb-2" v-if="selectedProject">{{ selectedProject.company }}
                            </h5>
                            <h3 class="pb-3">{{ selectedProject.title }}</h3>
                            <h4>{{ selectedProject.description }}</h4>
                        </div>
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
                    description: 'A full stack web app made during my Capstone designed for the Florence Darlington Technical College to aid tutors in the Math Hub sign students in more efficiently, and to give managers the ability to generate reports, view graphs, and edit employee and account info.The project was developed using Blazor on .NET 8, Azure SQL, VS- Code, and GitHub in an Agile / Scrum environment.',
                },
                {
                    id: 2,
                    title: 'Morgue Tracker',
                    company: 'McLeod Health',
                    image: './images/mcleodHealth.png',
                    description: 'Morgue Tracker is a mobile friendly full stack web app intended for employees at the McLeod morgue to streamline the intake and release process for cadavers, and to ensure that the cadaver is released to the correct funeral home.  The app was developed during an internship using ASP.NET MVC, GitHub, and Visual Studio.',
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
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
    padding-top: 50px;
    background-color: #bfbfbf;
    border-radius: 4px;
    margin-bottom: 20px;
    transition: box-shadow 0.3s, background-color 0.3s;
}

.img-box {
    width: 100%;
    border-radius: 4px;
    transition: opacity 500ms ease 0s;
}

.info {
    color: #bfbfbf;
    transition: color 0.3s;
}

.project-box:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #868686;

}

.img-box-modal {
    padding: 100px;
    background-color: #eeeeee;
    position:relative;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.close-button {
    position: absolute;
    top: 0;
    right: 0;
    margin: 20px;
}

.project-box:hover .info {
    color: white;

}

h3 {
    font-weight: 600;

}


.modal-footer {
    border-top: none;
}

.modal-content,
.modal-dialog, .modal-body {
    min-width: 800px;
    border-radius: 4px;
}

.modal-body {
    padding: 0px;
}

@media (max-width: 1250px) {

    .modal-content,
    .modal-dialog {
        min-width: 500px;
    }
}

@media (max-width: 500px) {

    .modal-content,
    .modal-dialog {
        min-width: 350px;
    }
}

</style>
