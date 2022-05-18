import React from "react";

export default function Input({ type = 'text', ...props }) {
    return (
        <input
            type={type}
            {...props}
            className="border px-4 py-2 rounded-xl focus:outline-none focus:ring focus:ring-sky-200 focus:border-sky-500 transition duration-200 shadow-sm w-full"
        />
    );
}
