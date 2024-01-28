<template>
    <div class="d-flex align-items-center content margin " id="landing-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h1 class="landing-title">Hi, I’m Campbell - A Full Stack Software Engineer.
                    </h1>
                    <div class="mb-5">

                        <p class="mt-4 about-content">
                            I am a senior studying Computer Science at Francis Marion University and I have a passion for
                            crafting
                            digital solutions. <br /><br />
                            During my software engineering journey I have aquired a skill set
                            with front-end technologies like Blazor, Vue and React as well as back-end frameworks such as .NET
                            with
                            C#.
                            <br /><br />
                            I'm not just a programmer; I'm a problem solver, a collaborator, and a relentless learner.

                        </p>
                        <p class="about-content">Contact me -
                            <a class="email-link" href="mailto:campbellsfrost@gmail.com">campbellsfrost@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 mb-5 d-flex justify-content-center margin-3">
                    <img src="./images/me_rock.png" class="img-fluid" alt="Picture of Campbell Frost">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.about-content {
    font-weight: 600;
    font-size: 22pt;
}

.margin {
    margin-top: 40px;
}

.email-link {
    padding-bottom: 3px;
    border-bottom: 1px solid #000;
    color: #000;
    text-decoration: none;
    transition: .2s ease-out;
    -webkit-transition: .2s ease-out
}

.email-link:hover {
    text-decoration: none;
    background-color: #000;
    color: #fff
}



.img-fluid {
    height: 100%;
    width: 100%;
    object-fit: contain;
}

.landing-title{
    font-weight: 700;
}
</style>