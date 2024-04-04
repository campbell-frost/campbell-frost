import React from 'react';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50" id="navigation">
            <nav className="bg-black py-1">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <a href="/" className="text-white text-xl font-bold py-2">Campbell Frost</a>
                        <button
                            className="block lg:hidden focus:outline-none"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="text-white text-3xl">&#8801;</span>
                        </button>
                        <div
                            className="hidden lg:flex lg:flex-grow lg:items-center lg:w-auto lg:justify-end"
                            id="navbarSupportedContent"
                        >
                            <div className="lg:flex lg:flex-row lg:ml-auto text-white text-lg">
                                <a
                                    href="https://github.com/campbell-frost"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link mx-3"
                                >
                                    Github
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/campbell-frost-39656a207/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link mx-3"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://www.instagram.com/campbell.frost/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="nav-link mx-3"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="mailto:campbellsfrost@gmail.com"
                                    className="btn-layered offset square mx-3"
                                    role="button"
                                    aria-pressed="true"
                                >
                                    Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
