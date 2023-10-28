"use client";

import { Card, Popup } from "@gravity-ui/uikit";
import React from "react";

export default function Home() {
  const boxRef = React.useRef(null);
  return (
    <>
      <Card
        theme="warning"
        view="filled"
        className="flex m-2 p-2 font-semibold"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem
        sapiente sint fugit, at voluptates corrupti maxime dicta eum temporibus
        natus ratione obcaecati aspernatur est facere, quasi atque nam nihil!
        Voluptatem optio itaque quia. Cum tempora totam animi earum officiis
        ullam iste esse natus, commodi vero numquam obcaecati! Quod eos omnis
        officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        doloremque alias praesentium molestiae laudantium porro aperiam nobis
        dicta, cupiditate consectetur optio, pariatur nisi. Mollitia illum
        debitis, beatae vel ipsum eaque.
      </Card>
      <Card
        theme="warning"
        view="outlined"
        className="flex m-2 p-2 font-semibold rounded"
      >
        Our Packs.. More info about best packs!
      </Card>

      <Card
        theme="warning"
        view="filled"
        className="flex m-2 p-2 font-semibold"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem
        sapiente sint fugit, at voluptates corrupti maxime dicta eum temporibus
        natus ratione obcaecati aspernatur est facere, quasi atque nam nihil!
        Voluptatem optio itaque quia. Cum tempora totam animi earum officiis
        ullam iste esse natus, commodi vero numquam obcaecati! Quod eos omnis
        officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        doloremque alias praesentium molestiae laudantium porro aperiam nobis
        dicta, cupiditate consectetur optio, pariatur nisi. Mollitia illum
        debitis, beatae vel ipsum eaque.
      </Card>
      <Card theme="warning" view="outlined" className="m-2 p-2 font-semibold">
        Our packs!
        <div className="justify-center flex">
          <img
            src="https://promupac.com/files/product/images/upakovka/nestandartnaya-upakovka.jpg"
            className="rounded m-2"
          ></img>
        </div>
      </Card>
    </>
  );
}
