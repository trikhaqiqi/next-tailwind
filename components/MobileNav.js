import React, { useState } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";

export default function MobileNav() {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700">
            <a href="#" className="text-white font-semibold uppercase">
                Kudang Koding
            </a>
            <div
                onClick={() => setOpen(false)}
                className={`${open ? 'block' : 'hidden'} bg-transparent absolute w-full h-full inset-0`}>
            </div>
            <button onClick={() => setOpen((open) => !open)} className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="{2}">
                    <path strokelinecap="round" strokelinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </button>
            <div className={`${open ? 'block' : 'hidden'} bg-white absolute right-0 mr-12 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden`}>
                <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
                <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
                <div className="w-full h-px bg-gray-300 my-1" />
                <ResponsiveNavLink href="#">Sign in </ResponsiveNavLink>
                <ResponsiveNavLink href="#">Sign up</ResponsiveNavLink>
            </div>
        </div>
    );
}
