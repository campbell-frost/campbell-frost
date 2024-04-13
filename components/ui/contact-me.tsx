"use client";
import React from "react";
import { BackgroundGradient } from "./background-gradient";

export default function ContactMeButton() {
    return (

        <button className="p-[3px] relative">
            <BackgroundGradient>

                <div className="px-8 py-2  bg-black rounded-xl relative group transition duration-200 text-white hover:bg-transparent">
                    <a
                        href="mailto:campbellsfrost@gmail.com"
                        role="button"
                        aria-pressed="true"
                    >
                        Email Me
                    </a>
                </div>
            </BackgroundGradient>
        </button>
    )
}
