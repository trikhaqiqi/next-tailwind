import React, { Fragment } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu, Transition } from '@headlessui/react';
import Line from "./Line";

export default function MobileNav() {
    const auth = {
        check: true,
        user: {
            name: 'M. Ilyas Tri Khaqiqi',
        },
    };
    // const [open, setOpen] = useState(false);
    return (
        <Menu as={'div'}
            className="w-full flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-700">
            <a href="#" className="text-white font-semibold uppercase">
                Kudang Koding
            </a>
            {/* <div
                onClick={() => setOpen(false)}
                className={`${open ? 'block' : 'hidden'} bg-transparent absolute w-full h-full inset-0`}>
            </div> */}
            <Menu.Button
                // onClick={() => setOpen((open) => !open)}
                className="focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokewidth="{2}">
                    <path strokelinecap="round" strokelinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items as="div" className="shadow-sm border bg-white absolute right-0 mr-12 top-0 mt-3 py-1 rounded-lg w-56 overflow-hidden">
                    <ResponsiveNavLink href="#">Home</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Articles</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Gallery</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">About</ResponsiveNavLink>
                    <ResponsiveNavLink href="#">Contact</ResponsiveNavLink>
                    <Line />
                    {auth.check ? (
                        <>
                            <ResponsiveNavLink href="#">Dashboard</ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">{auth.user.name}</ResponsiveNavLink>
                            <ResponsiveNavLink href="#">Account settings</ResponsiveNavLink>
                            <ResponsiveNavLink href="#">Change password</ResponsiveNavLink>
                            <ResponsiveNavLink href="#">Favorites Articles</ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">Help</ResponsiveNavLink>
                            <Line />
                            <ResponsiveNavLink href="#">Log out</ResponsiveNavLink>
                        </>
                    ) :
                        (<>
                            <ResponsiveNavLink href="#">Sign in </ResponsiveNavLink>
                            <ResponsiveNavLink href="#">Sign up</ResponsiveNavLink>
                        </>)
                    }
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
