import Head from "next/head";
import React from "react";

export default function Guest({ header, title, cardClassName, children }) {
    return (
        <div className="flex antialiased tracking-tighter text-gray-800 items-center justify-center md:min-h-screen md:bg-gray-100">
            <Head><title>{title}</title></Head>
            <div className={`${cardClassName ? cardClassName : 'lg:w-1/3'} w-full md:w-2/3`}>
                <div className="flex items-center justify-center mb-5">
                    <a href="/" className="flex items-center gap-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-emerald-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                        <h1 className="text-xl font-semibold tracking-tighter">
                            <span className="text-emerald-500">Kudang </span>
                            <span className="text-black">Koding</span>
                        </h1>
                    </a>
                </div>
                <div className="bg-white  md:rounded-2xl md:shadow-sm outline-hidden md:border">
                    <div className="px-6 py-3 border-b bg-gray-50/50">
                        <h1 className="font-medium capitalize">
                            {header}
                        </h1>
                    </div>
                    <div className="px-6 pt-3 pb-6">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
