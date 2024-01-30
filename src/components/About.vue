<template>
    <div class="d-flex align-items-center content margin " id="landing-top">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5 class="about-content-small">Hi, I’m Campbell
                    </h5>
                    <div class="mb-5">
                        <h1 class="my-5 about-content">
                            I am a full stack software engineer with a passion for crafting digital solutions
                        </h1>
                        <p class="about-content-small">Contact me -
                            <a class="email-link" href="mailto:campbellsfrost@gmail.com">campbellsfrost@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 mb-5 d-flex justify-content-center margin-3">
                    <img src="./images/me_rock.png" class="img-fluid border-radius" alt="Picture of Campbell Frost">
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.about-content-small {
    font-weight: 600;
    font-size: 30px;
}

.about-content {
    font-weight: 700;
    font-size: 52pt;
}
@media (max-width: 1400px) {
    .about-content {
        font-size: 58px;
    }
}

@media (max-width: 1200px) {
    .about-content {
        font-size: 43px;
    }
}

@media (max-width: 1000px) {
    .about-content {
        font-size: 34px;
        font-weight: 700;
    }
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

.margin {
    margin-top: 40px;
}

.border-radius {
    border-radius: 8px;
}

.img-fluid {
    height: 100%;
    width: 100%;
    object-fit: contain;
    border-radius: 4px;
}
</style>