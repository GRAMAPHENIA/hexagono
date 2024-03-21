import React from "react";
import Image from "next/image";

const Hexagono = () => {
  return (
    <>
      <section className="mt-28 w-auto bg-gray-800/20 backdrop-blur-lg p-4 lg:p-16 rounded-lg gap-3 flex justify-center shadow-md flex-col lg:mt-[400px] mb-10 border border-slate-700 m-2 lg:m-8">
        <figure>
          <Image
            className="m-auto"
            src="/logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <h2 className="my-10 text-center text-7xl font-serif text-amber-100 tracking-tight leading-[80px]">
            CONCEPTO HEXAGONO
          </h2>
          <p className="lg:text-xl text-center font-extralight text-pretty px-32">
            <span className="text-amber-100">Investigamos</span> el
            desarrollo, <span className="text-amber-100">desarrollamos</span> en
            base a lo aprendido.
            <span className="text-amber-100">Divulgamos</span> para retornar al
            origen de todo,{" "}
            <span className="text-amber-100">por la generosidad</span> de los
            desarrolladores{" "}
            <span className="text-amber-100">de la comunidad</span>, a los
            cuales estamos enteramente agradecidos.
          </p>
        </figure>
      </section>
    </>
  );
};

export default Hexagono;
