import React from "react";
import Button from "../components/Button";

export default function index() {
  return (
    <div >
      <div className="max-w-xl my-5">
        <div className="overflow-hidden bg-white border shadow-sm rounded-xl">
          <header className="border-b px-4 py-2.5 bg-gray-50/50 flex items-center justify-between">
            <div>
              <h1 className="font-medium">
                Card title
              </h1>
              <span className="text-gray-500">Lorem ipsum dolor sit amet.</span>
            </div>
            <a
              href="#"
              className="bg-pink-500 hover:bg-pink-600 transition duration-300 focus:outline-none focus:ring focus:ring-pink-200 text-white px-5 py-2.5 rounded-xl font-semibold font-sm"
            >
              New Task
            </a>
          </header>
          <section className="px-4 py-2.5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium atque, nobis officiis debitis hic at blanditiis maiores sunt soluta doloremque! Dolores voluptates repudiandae blanditiis, alias tempora ea recusandae laboriosam ut atque optio facere id velit eos cum et ratione debitis quam! Incidunt delectus placeat ab? Quibusdam architecto nulla dolorum deleniti.
          </section>
          <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50/50">
            Lorem ipsum dolor sit.
          </footer>
        </div>
      </div>

      <div className="space-x-2">
        <button className="btn btn-primary">
          Button 1
        </button>
        <button className="btn btn-secondary">
          Button 2
        </button>
        <Button onClick={() => console.log("Hello world")} >Button 1</Button>
        <Button className="bg-pink-600 focus:ring-pink-200 hover:bg-pink-700" onClick={() => console.log("Hello world")} >
          Button 3
        </Button>
        <Button className="text-black bg-white border-gray-300 focus:ring-gray-200 hover:bg-gray-100">
          Button 5
        </Button>
      </div>
    </div>

  );
}
