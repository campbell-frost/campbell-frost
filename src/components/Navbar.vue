<template>
    <div class="fixed-top" id="navigation">
        <nav class="navbar navbar-expand-lg primary-nav container my-1">
            <a aria-current="page" class="nav-item nav-link ps-3 me-4 primary" href="/">Campbell Frost</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <div class="navbar-nav ms-auto">
                    <div class="nav">

                        <a class="nav-item nav-link mx-3" href="https://github.com/campbell-frost" target="__blank">Github
                        </a>
                        <a class="nav-item nav-link mx-3" href="https://www.linkedin.com/in/campbell-frost-39656a207/"
                            target="__blank">Linkedin
                        </a>
                        <a class="nav-item nav-link mx-3" href="https://www.instagram.com/campbell.frost/"
                            target="__blank">Instagram
                        </a>
                    </div>
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
    font-size: x-large;
    border-bottom: 1px solid #000;
    background-color: white;
}

.primary {
    font-weight: 600;
}

.offset {
    box-shadow: .4em .3em 0 0 #000;
    border-radius: 0px;
}

.offset:focus,
.offset:hover {
    box-shadow: 0 0 0 0 #000000;
    color: #000;
    text-decoration: none;
    border-radius: 0px;
}

.btn-layered {
    background: none;
    border: 2px solid #000;
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

.navbar-toggler:focus {
    box-shadow: none;
}



.nav * {
    box-sizing: border-box;
    transition: all .35s ease;
}

.nav a {
    padding: .5em .8em;
    color: rgba(0, 0, 0);
    position: relative;
    text-decoration: none;
    font-size: 20px;
}

.nav a::before,
.nav a::after {
    content: '';
    height: 14px;
    width: 14px;
    position: absolute;
    transition: all .35s ease;
    opacity: 0;
}

.nav a::before {
    content: '';
    right: 0;
    top: 0;
    border-top: 3px solid #000000;
    border-right: 3px solid #000000;
    transform: translate(-100%, 50%);
}

.nav a:after {
    content: '';
    left: 0;
    bottom: 0;
    border-bottom: 3px solid #000000;
    border-left: 3px solid #000000;
    transform: translate(100%, -50%)
}

.nav a:hover:before,
.nav a:hover:after {
    transform: translate(0, 0);
    opacity: 1;
}

.nav a:hover {
    color: #000000;
}
</style>