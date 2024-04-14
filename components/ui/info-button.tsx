import React from "react";

interface InfoButtonProps {
    name: string;
    link: string;
}

export default function InfoButton({ name, link }: InfoButtonProps) {
    return (
        <button className="p-[3px] relative mx-4 border-b-2 border-transparent hover:border-white transition-border duration-300">
            <a
                href={link}
                role="button"
                aria-pressed="true"
            >
            <div className="absolute inset-0 " />
                <div className="px-4 py-2 relative group text-white ">
                    {name}
                </div>
            </a>
        </button>
    );
}
