import React from "react";

export default function ApplicationLogo() {
    return (
        <a className="inline-flex items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
            <h1 className="text-xl font-semibold tracking-tighter">
                <span className="text-emerald-500">Kudang </span>
                <span className="text-black">Koding</span>
            </h1>
        </a>
    );
}
