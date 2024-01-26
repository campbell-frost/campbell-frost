<template>
    <div class="navigation">
        <div class="fixed-top" id="navigation">
            <nav class="navbar navbar-expand-lg primary-nav container "><a aria-current="page"
                    class="nav-item nav-link pl-5 text-xl-start" href="/" style="margin-left:14px;">Campbell Frost</a><button class="navbar-toggler"
                    type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <img aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        class="hamburger fa-bars fa-w-14 " role="img" src="./images/Hamburger_icon.svg.png"
                        viewBox="0 0 448 512"/>
                </button>
                <div class="collapse navbar-collapse" id="navbar" style="margin-left:640px;">
                    <div class="navbar-nav align-items-center"><a class="nav-item nav-link mr-4"
                            href="https://github.com/campbell-frost" target="__blank">Github</a><a
                            class="nav-item nav-link ml-4" href="https://www.linkedin.com/in/campbell-frost-39656a207/"
                            target="__blank">Linkedin</a><a class="nav-item nav-link mr-4"
                            href="https://www.instagram.com/campbell.frost/" target="__blank">Instagram</a><a
                            href="mailto:campbellsfrost@gmail.com" class="btn btn-layered offset square mr-4" role="button"
                            aria-pressed="true">Contact Me</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
#navigation {
    border-bottom: 1px solid #000;
}

.navigation {
    font-family: CircularStd;

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
    font-family: CircularStd, sans-serif !important;
    font-size: 10pt;
    font-weight: 500;
    line-height: 1;
    padding: 10px 26px;
    transition: .1s ease-out;
    -webkit-transition: .1s ease-out;
    color: #000;

}

</style>