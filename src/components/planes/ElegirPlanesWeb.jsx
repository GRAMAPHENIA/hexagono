import React, { useEffect, useState } from "react";

import ModalPlanes from "@/components/modales/ModalPlanes";
import PresWeb from "@/components/presupuestos/PresWeb";

import PresupuestosWeb from "@/components/presupuestos/PresupuestosWeb";

const ElegirPlanesWeb = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }

    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <div className="flex justify-center lg:justify-end items-center">
        <button
          onClick={openModal}
          className="w-[250px] col-span-2 flex justify-center items-center  bg-amber-200/90 hover:bg-amber-200 px-8 py-4 rounded-full sombra-light-amber border border-slate-600/40 mb-20 mx-auto text-slate-800 hover:text-[#171c21]"
        >
          Elegir plan
        </button>

        <ModalPlanes isOpen={isModalOpen} onClose={closeModal}>
          {/* Aca se escribe el contenido que se ve en el children */}

          <h1 className="text-5xl lg:text-6xl text-amber-100 text-center font-black pl-4 mt-16">
            <span className="text-amber-200">Planes </span>
            Web
            <span className="text-amber-200">.</span>
          </h1>
          <p className="text-[var(--font-semi-light)] mx-auto text-md text-center font-extralight p-0 lg:italic antialiased">
            &quot;Encuentra el adecuado para tu sitio.&quot;
          </p>

          {/* Aca se renderizan los componentes para presupuestar */}
          {/* <PresWeb /> */}
          <PresupuestosWeb/>
        </ModalPlanes>
      </div>
    </>
  );
};

export default ElegirPlanesWeb;
