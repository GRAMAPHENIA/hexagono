import React from "react";

import Dominios from "@/components/informacion/Dominios";
import Hosting from "@/components/informacion/Hosting";
import Planes from "@/components/planes/Planes";
// import PresupuestoForm from "@/components/presupuestos/PresupuestoForm";

const Informacion = () => {
  return (
    <>
      <section className="lg:pt-10 px-8 lg:px-20">
        <Dominios />
        <Hosting />
        <Planes />
        {/* <PresupuestoForm /> */}
      </section>
    </>
  );
};

export default Informacion;
