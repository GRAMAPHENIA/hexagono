import React from "react";

import Dominios from "@/components/informacion/Dominios";
import Hosting from "@/components/informacion/Hosting";

const Informacion = () => {
  return (
    <>
      <section className="lg:pt-52 px-4 lg:px-20">
        <Dominios />
        <Hosting />
      </section>
    </>
  );
};

export default Informacion;
