import Head from "next/head";
import React from "react";
import ApplicationLogo from "../components/ApplicationLogo";
import Footer from "../components/Footer";

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

            <Footer />
        </div>
    );
}
