<template>
    <div class="fixed-top" id="navigation">
        <nav class="navbar navbar-expand-lg primary-nav container my-1">
            <a aria-current="page" class="nav-item nav-link ps-3 me-4" href="/">Campbell Frost</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav ms-auto">
                    <a class="nav-item nav-link mx-3" href="https://github.com/campbell-frost" target="__blank">Github
                    </a>
                    <a class="nav-item nav-link mx-3" href="https://www.linkedin.com/in/campbell-frost-39656a207/"
                        target="__blank">Linkedin
                    </a>
                    <a class="nav-item nav-link mx-3" href="https://www.instagram.com/campbell.frost/"
                        target="__blank">Instagram
                    </a>
                    <a class="btn btn-layered offset square mx-3" href="mailto:campbellsfrost@gmail.com" role="button"
                        aria-pressed="true">Contact Me
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
#navigation {
    font-weight: 500;
    font-size: larger;
    border-bottom: 1px solid #000;
    background-color: white;
}

.offset {
    box-shadow: .4em .3em 0 0 #000;
    border-radius: 0px;
}

.offset:focus,
.offset:hover {
    box-shadow: 0 0 0 0 #42776a;
    color: #000;
    text-decoration: none;
    border-radius: 0px;
}

.btn-layered {
    background: none;
    border: 2px solid #000;
    font-size: 10pt;
    font-weight: 500;
    line-height: 1rem;
    padding: 10px 26px;
    padding-top: 13px;
    transition: .1s ease-out;
    -webkit-transition: .1s ease-out;
    color: #000;
    max-width: 140px;
}

.hamburger {
    max-width: 20px;
}

.navbar-toggler {
    outline: none;
    border: none;

}
.navbar-toggler:focus{
    box-shadow: none;
}
</style>