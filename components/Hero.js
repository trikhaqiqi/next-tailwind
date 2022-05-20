import React from "react";
import MobileNav from "./MobileNav";
import NavLink from "./Navlink";

export default function Hero() {
    const auth = {
        check: true,
        user: {
            name: 'M. Ilyas Tri Khaqiqi',
        },
    };
    return (
        <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
            <MobileNav />

            <div className="hidden md:block border-b border-white/10 py-3">
                <div className="container">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <a href="#" className="text-white font-semibold uppercase mr-6">Kudang Koding</a>
                            <NavLink href="#">Home</NavLink>
                            <NavLink href="#">Articles</NavLink>
                            <NavLink href="#">Gallery</NavLink>
                            <NavLink href="#">About</NavLink>
                            <NavLink href="#">Contact</NavLink>
                        </div>
                        {auth.check ? (
                            <div className="flex items-center gap-x-2">
                                <NavLink className="flex items-center hover:bg-transparent gap-x-2" href="#">
                                    {auth.user.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </NavLink>
                            </div>
                        ) : (
                            <div className="flex items-center gap-x-2">
                                <NavLink href="#">Sign in</NavLink>
                                <NavLink href="#">Sign up</NavLink>
                            </div>
                        )}
                    </nav>
                </div>
            </div>

            <div className="container">
                <div className="w-full md:w-2/3">
                    <header className="text-white py-4 sm:py-8 md:py-16">
                        <h1 className="text-xl md:text-3xl font-bold">New Revolution</h1>
                        <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
                        <a href="#" className="bg-white hover:ng-gray-50 hover:text-blue-600 transition duration-300 text-gray-900 px-4 py-2 text-sm md:text-tiny md:px-6 md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400">
                            Browse
                        </a>
                    </header>
                </div>
            </div>
        </div>
    );
}
