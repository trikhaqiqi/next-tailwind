import { Menu } from "@headlessui/react";
import React from "react";

export default function DropdownLink({ href, children }) {
    return (
        <Menu.Item>
            <a
                href={href}
                className="px-4 py-2 text-sm hover:bg-gray-200 text-gray-700 hover:text-black block">
                {children}
            </a>
        </Menu.Item>
    );
}
