import React from "react";

import Dominios from "@/components/informacion/Dominios";
import Hosting from "@/components/informacion/Hosting";
import Consultas from "@/components/Consultas";

const Informacion = () => {
  return (
    <>
      <section className="lg:pt-52 px-4 lg:px-20">
        <Dominios />
        <Hosting />
        <Consultas />
      </section>
    </>
  );
};

export default Informacion;
