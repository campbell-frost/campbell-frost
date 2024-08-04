"use client";
import React from "react";
import IconCloud from "./magicui/icon-cloud";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const TechComponent = () => {
  const techList = [
    {
      image:
        "https://devblogs.microsoft.com/aspnet/wp-content/uploads/sites/16/2019/04/BrandBlazor_nohalo_1000x.png",
      text: "Blazor",
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      text: "React.js",
    },
    {
      image: "https://www.svgrepo.com/show/354528/vue.svg",
      text: "Vue.js",
    },
    {
      image: "./images/svelte.png",
      text: "Svelte",
    },
    {
      image: "./images/csharp.png",
      text: "C#",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/1024px-Microsoft_.NET_logo.svg.png",
      text: ".NET",
    },
    {
      image:
        "https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75",
      text: "Next.js",
    },
    {
      image:
        "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
      text: "Firebase",
    },
    {
      image:
        "https://cf.appdrag.com/dashboard-openvm-clo-b2d42c/uploads/supabase-TAiY.png",
      text: "Supabase",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
      text: "Azure",
    },
  ];

  return (
    <div className=" py-20">
      <h1 className=" font-bold text-3xl mb-10">Technologies I Use</h1>
      <CardContainer divisiorValue={25}>
        <CardBody>
          <CardItem>
          <IconCloud icons={techList} />
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default TechComponent;
