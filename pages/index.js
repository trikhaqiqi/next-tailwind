import React from "react";
import Button from "../components/Button";
import App from "../layouts/App";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-1/2">
        <h1 className="font-display font-semibold text-2xl mb-6">
          Lorem ipsum dolor sit amet.
        </h1>
        <article className="text-lg leading-relaxed">
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, blanditiis! Iste, dolorem? Nulla nesciunt quia eos ea atque architecto eligendi, nobis libero asperiores necessitatibus molestias ab consectetur dignissimos! Aliquam, ratione?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem eos iusto consequatur quasi laboriosam repudiandae, illum fugit nemo a, consequuntur harum. Rem velit repellendus libero laborum illum excepturi. Porro.
          </p>
        </article>
      </div>
    </div>
  );
}

Home.getLayout = (page) => <App children={page} />;