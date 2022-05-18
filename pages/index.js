import React from "react";
import Button from "../components/Button";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="bg-emerald-500 sm:bg-blue-500 md:bg-indigo-500 lg:bg-cyan-600 w-full aspect-video flex items-center justify-center text-white">
        Tailwind CSS
      </div>
    </div>
  );
}

Home.getLayout = (page) => <App children={page} />;