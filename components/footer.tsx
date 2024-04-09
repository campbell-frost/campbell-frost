import React from 'react';

const Footer = () => {
    return (
        <div className="w-full bg-black text-white py-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-center text-xl font-bold">
                    <p>© Campbell Frost - 2024 | Powered by</p>
                    <img src="./images/react-logo.png" alt="React Icon" className="w-10 mx-2" />
                    <p>React,</p>
                    <img src="https://www.wpgraphql.com/_next/image?url=%2Flogos%2Flogo-nextjs.png&w=384&q=75" alt="Next Icon" className="w-10 mx-2" /> Next &
                    <img src="https://austinmorlan.com/posts/drawing_a_triangle/media/white_triangle.png" alt="Vercel Icon" className="w-10 mx-2" /> Vercel
                </div>
            </div>
        </div>
    );
};

export default Footer;
