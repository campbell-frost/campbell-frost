'use client'
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ContactMeButton from './ui/contact-me';
import InfoButton from './ui/info-button';

const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-black" id="navigation">
            <nav className=" bg-transparent py-1">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <InfoButton name='Campbell Frost' link="http://campbell-frost-next.vercel.app" bold={true}/>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <a
                                    className="block lg:hidden focus:outline-none"
                                    type="button"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="text-white text-3xl">&#8801;</span>
                                </a>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-black mr-7 border-none">
                                <div className="text-white bg-black border border-white border-opacity-20 rounded-lg ">
                                    <DropdownMenuItem>
                                        <a href="https://github.com/campbell-frost" target="_blank" rel="noopener noreferrer">Github</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a href="https://www.linkedin.com/in/campbell-frost-39656a207/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a href="https://www.instagram.com/campbell.frost/" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a href="mailto:campbellsfrost@gmail.com">Email Me</a>
                                    </DropdownMenuItem>
                                </div>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div className="hidden lg:flex lg:flex-grow lg:items-center lg:w-auto lg:justify-end">
                            <div className="lg:flex lg:flex-row lg:ml-auto text-white text-lg">
                                <InfoButton name='Github' link="https://github.com/campbell-frost" bold={false} />
                                <InfoButton name='LinkedIn' link="https://www.linkedin.com/in/campbell-frost-39656a207/" bold={false} />
                                <InfoButton name='Instagram' link="https://www.instagram.com/campbell.frost/" bold={false} />
                                <ContactMeButton />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
