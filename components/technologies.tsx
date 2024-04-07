import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const TechComponent = () => {
    const techList = [
        {
            image: "https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png",
            text: "Blazor"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
            text: "Vue.js"
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            text: "React.js"
        },
        {
            image: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-shadow.png",
            text: "Bootstrap"
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
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
            text: "Azure"
        },
        {
            image: "https://www.oraylis.de/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/azure-devops-logo.png.webp",
            text: "Devops"
        },
        {
            image: "https://seekicon.com/free-icon-download/c-sharp_1.png",
            text: "C#"
        },
        {
            image: "https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/23-swift-512.png",
            text: "Swift"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
            text: "Kotlin"
        },
        {
            image: "https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png",
            text: "Java"
        },

    ];


    return (
        <div className=" py-20">

            <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-16">
                {techList.map((tech, index) => (
                    <CardContainer key={index} divisiorValue={25}>
                        <CardBody  className='text-white border bg-black border-white border-opacity-20 rounded-lg'>
                            <div className=" p-4 mx-16 rounded-lg relative flex flex-col justify-center items-center">
                                <CardItem
                                    translateZ="250"
                                >
                                    <img
                                        className="tech-icon w-48 h-48 object-contain"
                                        src={tech.image}
                                        alt={`Tech ${index}`}

                                    />
                                    <div className="absolute opacity-0 rounded-lg"></div>
                                </CardItem>
                                <CardItem
                                    translateZ="300"
                                    className="text-center"
                                >
                                    <div className="p-4 text-xl ">
                                        <h1 className="text-white">{tech.text}</h1>
                                    </div>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </div>
    );
};

export default TechComponent;