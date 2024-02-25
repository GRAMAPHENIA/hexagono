import React from "react";
import Image from "next/image";

const Hexagono = () => {
  return (
    <>
      <section className="border rounded-2xl m-10 p-10 bg-slate-800/10 backdrop-blur-sm mt-72">
        <figure>
          <Image
          className="m-auto"
            src="/logo.svg"
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <p>Parrafo</p>
        </figure>
      </section>
    </>
  );
};

export default Hexagono;
