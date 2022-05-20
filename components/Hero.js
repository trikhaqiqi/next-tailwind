import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import DropdownLink from "./DropdownLink";
import Line from "./Line";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import NavLink from "./Navlink";
const Title = ({ children }) => (
    <h1 className="text-xl md:text-3xl font-bold">{children}</h1>
);

const Body = ({ children }) => (
    <div>{children}</div>
);

const Hero = ({ children }) => {
    return (
        <div className="bg-gradient-to-bl from-gray-900 via-emerald-800 to-gray-900 mb-8 text-white">
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