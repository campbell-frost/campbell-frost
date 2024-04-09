import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

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
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
            text: "Azure"
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
            image: "https://seekicon.com/free-icon-download/c-sharp_1.png",
            text: "C#"
        },
        {
            image: "./images/pngegg.png",
            text: "sql"
        }


    ];


    return (
        <div className=" py-20 mb-100">

            <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-16 max-h-90 max-w-90">
                {techList.map((tech, index) => (
                    <CardContainer key={index} divisiorValue={25}>
                        <CardBody className='text-white border bg-black border-white border-opacity-20 rounded-lg'>
                            <div className=" p-4 m-8 rounded-lg relative flex flex-col justify-center items-center">
                                <CardItem
                                    translateZ="250"
                                >
                                    <img
                                        className="tech-icon object-contain rounded"
                                        src={tech.image}
                                        alt={`Tech ${index}`}
                                    />
                                    <div className="absolute opacity-0 rounded-lg"></div>
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