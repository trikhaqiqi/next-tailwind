import React from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import App from "../layouts/App";

export default function Home() {
  return (
    <>
      <Hero>
        <Hero.Body>
          <header className="text-white py-4 sm:py-8 md:py-16">
            <Hero.Title className={'!text-transparent bg-gradient-to-r from-red-500 via-teal-500 to-blue-500 bg-clip-text'}>New Revolution</Hero.Title>
            <p className="text-base md:text-xl leading-relaxed font-light mt-4 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className="underline decoration-sky-500 text-sky-400 font-medium">Dolorem quam</a>, recusandae quis dolorum veritatis nulla, nemo consequuntur temporibus quisquam expedita libero est facere ipsum laboriosam eveniet itaque. Rem, dicta temporibus?</p>
            <a href="#" className="bg-white hover:ng-gray-50 hover:text-blue-600 transition duration-300 text-gray-900 px-4 py-2 text-sm md:text-tiny md:px-6 md:py-2.5 rounded-xl font-medium inline-flex shadow-inner shadow-gray-300 md:shadow-gray-400">
              Browse
            </a>
          </header>
        </Hero.Body>
      </Hero>
      <div className="container">
        <div className="max-w-xl w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi beatae similique eligendi quibusdam! Culpa dolorem, repellat dolorum illo libero voluptate reprehenderit, sapiente voluptas alias est natus. Ullam quos error aut et assumenda expedita nisi, saepe, cumque nulla quidem delectus beatae enim dicta facilis esse laboriosam ratione repellat iure accusamus! Aut tempora esse ipsa. Sed debitis impedit illo dolor tenetur? Nemo perferendis quod officia placeat accusantium esse natus repellat debitis ipsa repudiandae sunt inventore corrupti, facere nihil, a saepe doloremque dolor.
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page) => <App title="Tailwind" children={page} />;;