import Head from "next/head";
import React from "react";
import Hero from "../components/Hero";

export default function App({ title = 'Next Tailwind CSS', children }) {
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            <div>
                {children}
            </div>
        </div>
    );
}
