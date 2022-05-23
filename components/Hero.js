import React from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Title = ({ className, children }) => (
    <h1 className={`${className ? className : ''} text-xl md:text-3xl font-bold text-white inline-block`}>{children}</h1>
);

const Body = ({ children }) => (
    <div className="text-white py-4 sm:py-8 md:py-16">{children}</div>
);

const Hero = ({ children }) => {
    return (
        <div className="bg-gradient-to-bl from-gray-900 via-emerald-800 to-gray-900 mb-4 sm:mb-12 text-white">
            <MobileNav />
            <Navbar />
            <div className="container">
                <div className="w-full md:w-2/3">
                    {children}
                </div>
            </div>
        </div>
    );
};

Hero.Title = Title;
Hero.Body = Body;

export default Hero;