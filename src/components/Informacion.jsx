import React from "react";

import Dominios from "@/components/informacion/Dominios";
import Hosting from "@/components/informacion/Hosting";
import Planes from "@/components/planes/Planes";
import PresWeb from "@/components/presupuestos/PresWeb";

const Informacion = () => {
  return (
    <>
      <section className="lg:pt-10 px-4 lg:px-20">
        <Dominios />
        <Hosting />
        <Planes />
        <PresWeb />
      </section>
    </>
  );
};

export default Informacion;
