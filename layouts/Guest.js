import Head from "next/head";
import React from "react";

export default function Guest({ header, title, cardClassName, children }) {
    return (
        <div className="flex antialiased tracking-tighter text-gray-800 items-center justify-center min-h-screen bg-gray-100">
            <Head><title>{title}</title></Head>
            <div className={`${cardClassName ? cardClassName : 'w-1/3'} `}>
                <div className="bg-white  rounded-2xl shadow-sm outline-hidden border">
                    <div className="px-6 py-3 border-b bg-gray-50/50">
                        <h1 className="font-medium capitalize">
                            {header}
                        </h1>
                    </div>
                    <div className="px-6 py-3">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
