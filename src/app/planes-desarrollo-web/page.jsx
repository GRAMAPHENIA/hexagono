"use client";

import Navbar from "@/components/Navbar";
import Consultas from "@/components/Consultas";
import Footer from "@/components/Footer.jsx";
import ElegirPlanesWeb from "@/components/planes/ElegirPlanesWeb";
import PlanesWeb from "@/components/planes/PlanesWeb";

const PlanesDesarrolloWeb = () => {
  return (
    <>
      <section className="lg:mx-20" id="planes-desarrollo-web">
        <Navbar />
        <PlanesWeb />
        <Consultas />
        <Footer />
      </section>
    </>
  );
};

export default PlanesDesarrolloWeb;
