"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Modal from "@/components/Modal.jsx";

const Hosting = () => {
  const modalhosting = [
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
    {
      titulo: "/",
      descripcion: "/",
    },
  ];

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
      <section className="mt-20 lg:mt-40 mb-20" id="hosting">
        <figure className="flex flex-col items-start py-10">
          {/* <Image
            src="/titulos/grafico.svg"
            alt="Imagen para la  sección que destaca el diseño gráfico"
            width={500}
            height={200}
            className="py-10"
          /> */}
          HOSTING
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
            Servicios de Hosting Confiables para tu Sitio Web.
            </span>
            <br />
            <br />
            La elección del hosting adecuado es esencial para el éxito en línea.
            Nos especializamos en servicios de hosting confiables y seguros que
            garantizan un funcionamiento óptimo para tu sitio web. Ya sea que
            necesites hosting compartido, VPS o dedicado, estamos aquí para
            proporcionarte la solución perfecta para tus necesidades de
            alojamiento web. Confía en nosotros para mantener tu sitio en línea
            y en funcionamiento sin problemas.
          </p>
        </figure>
        <div className="flex justify-center lg:justify-center mb-20">
          <button
            onClick={openModal}
            className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          >
            Saber Más
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* Aca se escribe el contenido que se ve en el children */}

            <h1 className="text-2xl mt-32 lg:mt-14 lg:text-7xl text-amber-100 p-2 lg:p-8 text-center font-black">
              <span className="text-amber-200">Diseño Gráfico: </span>
              Transformando ideas en realidad
              <span className="text-amber-200">.</span>
            </h1>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-16 italic antialiased">
              &quot;El diseño gráfico es una herramienta fundamental en el mundo
              visual de hoy, permitiendo la creación de contenido impactante y
              memorable. Al aprovechar herramientas avanzadas como Figma y otros
              softwares de diseño, los diseñadores pueden llevar sus habilidades
              al siguiente nivel y ofrecer soluciones visuales
              excepcionales.&quot;
            </p>

            <ul className="text-center lg:text-left">
              {modalhosting.map(({ titulo, descripcion }) => (
                <li
                  className="px-8 text-left lg:px-32 mb-10 text-2xl"
                  key={titulo}
                >
                  <h1 className="mb-4 underline underline-offset-4 decoration-[var(--font-semi-light)] text-amber-50 font-extrabold">
                    {titulo}
                  </h1>
                  <p className="pb-10 text-lg font-extralight antialiased">
                    {descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Hosting;
Hosting;
