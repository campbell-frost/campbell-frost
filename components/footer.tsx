import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white py-4">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center md:text-xl font-bold">
          <div className="mx-2 md:flex-1 sm:flex-none sm:text-center lg:text-end pt-4">
            <p className="sm:mb-2">© Campbell Frost - 2024 | Powered by</p>
          </div>
          <div className="md:flex-1 sm:flex-none sm:text-center lg:text-start pt-4">
            <img
              src="./images/react-logo.png"
              alt="React Icon"
              className="w-10 mx-2 inline"
            />
            <p className="inline">React,</p>
            <img
              src="https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75"
              alt="Next Icon"
              className="w-10 mx-2 inline"
            />
            <p className="inline">Next & </p>
            <img
              src="https://austinmorlan.com/posts/drawing_a_triangle/media/white_triangle.png"
              alt="Vercel Icon"
              className="w-10 mx-2 inline"
            />
            <p className="inline">Vercel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
