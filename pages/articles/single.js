import Head from "next/head";
import React from "react";
import ArticleBody from "../../components/ArticleBody";
import Hero from "../../components/Hero";
import App from "../../layouts/App";

export default function Single() {
    return (
        <div>
            <Head>
                <title>The Best Article In The World</title>
            </Head>
            <Hero>
                <Hero.Body>
                    <Hero.Title>The Best Article In The World</Hero.Title>
                    <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit, recusandae quis dolorum veritatis nulla.
                    </p>
                </Hero.Body>
            </Hero>

            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <ArticleBody />
                </div>
            </div>
        </div>
    );
}

Single.getLayout = page => <App children={page} />;
