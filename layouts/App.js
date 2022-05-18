import Head from "next/head";
import React from "react";

export default function App({ title = 'Next Tailwind CSS', children }) {
    return (
        <div>
            <Head>
                <title>
                    {title}
                </title>
            </Head>
            {children}
        </div>
    );
}
