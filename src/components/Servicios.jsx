import Image from "next/image";

import Grafico from "@/components/Grafico.jsx";
import DesarrolloWeb from "@/components/DesarrolloWeb.jsx";
import Modelado3D from "@/components/Modelado3D.jsx";
import Tecnologias from "@/components/Tecnologias.jsx";

const Servicios = () => {
  return (
    <>
      <section className=" lg:pt-10 px-8 lg:px-20">
        <Grafico />
        <DesarrolloWeb />
        <Modelado3D />
        <Tecnologias />
      </section>
    </>
  );
};

export default Servicios;
