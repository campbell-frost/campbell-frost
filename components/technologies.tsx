'use client'
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { Icon } from './ui/icon';

const TechComponent = () => {
    const techList = [
        {
            image: "https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png",
            text: "Blazor"
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            text: "React.js"
        },
        {
            image: "https://www.svgrepo.com/show/354528/vue.svg",
            text: "Vue.js"
        },
        {
            image: "https://seekicon.com/free-icon-download/c-sharp_1.png",
            text: "C#"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
            text: ".NET"
        },
        {
            image: "https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75",
            text: "Next.js"
        },
        {
            image: "./images/pngegg.png",
            text: "SQL"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
            text: "Azure"
        },
    ];

    return (
        <div className=" py-20">
            <div className="grid grid-cols-2 text-white md:grid-cols-8 gap-16 max-h-90 max-w-90">
                {techList.map((tech, index) => (
                    <CardContainer divisiorValue={1000}>
                        <CardBody>
                            <CardItem translateZ={50}>
                                <div key={index} className="border bg-black border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative">
                                    <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                                    <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                                    <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                                    <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
                                    <img
                                        className="tech-icon object-contain rounded"
                                        src={tech.image}
                                        alt={tech.text}
                                    />
                                    {tech.text}

                                    <div className="absolute opacity-0 rounded-lg"></div>
                                </div>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default TechComponent;