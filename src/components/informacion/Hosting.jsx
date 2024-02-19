"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Modal from "@/components/modales/Modal.jsx";

const Hosting = () => {
  const metodos = [
    {
      titulo: "Almacenamiento",
    },
    {
      titulo: "Rendimiento",
    },
    {
      titulo: "Soporte",
    },
    {
      titulo: "Escalabilidad",
    },
    {
      titulo: "Seguridad",
    },
    {
      titulo: "Respaldo",
    },
  ];
  const modalhosting = [
    {
      titulo: "Almacenamiento confiable",
      descripcion:
        "Ofrecemos almacenamiento en servidores confiables y seguros para garantizar la disponibilidad y seguridad de tus datos en línea.",
    },
    {
      titulo: "Rendimiento óptimo",
      descripcion:
        "Nuestros servidores están optimizados para brindar un rendimiento excepcional, asegurando tiempos de carga rápidos y una experiencia fluida para tus usuarios.",
    },
    {
      titulo: "Soporte técnico experto",
      descripcion:
        "Contamos con un equipo de soporte técnico altamente capacitado y disponible las 24 horas del día, los 7 días de la semana, listo para ayudarte con cualquier problema o consulta que puedas tener.",
    },
    {
      titulo: "Escalabilidad",
      descripcion:
        "Nuestros servicios de hosting son altamente escalables, lo que te permite ajustar tus recursos según las necesidades de tu sitio web o aplicación en cualquier momento.",
    },
    {
      titulo: "Seguridad avanzada",
      descripcion:
        "Implementamos medidas de seguridad avanzadas para proteger tu sitio web contra amenazas en línea, como ataques de hackers, malware y phishing.",
    },
    {
      titulo: "Facilidad de uso",
      descripcion:
        "Nuestras plataformas de hosting son fáciles de usar, con paneles de control intuitivos que te permiten administrar tu sitio web y configuraciones de servidor de manera eficiente.",
    },
    {
      titulo: "Respaldo automático",
      descripcion:
        "Realizamos respaldos automáticos regulares de tus datos para garantizar que tu información esté siempre protegida y disponible en caso de emergencia.",
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
          <h2 className="text-6xl text-center font-serif text-slate-400 py-10">
            Sobre el <span className="text-amber-100">Hosting</span>
          </h2>
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
        <section className="grid grid-cols-2 lg:grid-cols-6 justify-center gap-8 pt-2 mb-14">
          {metodos.map(({ titulo }, index) => (
            <div
              className="text-[var(--dark)] lg:col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]"
              key={index}
            >
              <h2 className="text-sm text-sm:ml-48 ml-2">{titulo}</h2>
            </div>
          ))}
        </section>
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
              <span className="text-amber-200">Hosting: </span>
              Tu presencia en línea en una realidad accesible
              <span className="text-amber-200">.</span>
            </h1>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-16 italic antialiased">
              &quot;El hosting es una piedra angular en el mundo digital
              contemporáneo, facilitando la creación de presencias web
              accesibles y confiables. Al hacer uso de plataformas avanzadas y
              tecnologías de hospedaje, los proveedores de hosting pueden
              potenciar la entrega de soluciones online excepcionales, brindando
              a los usuarios experiencias web confiables y seguras.&quot;
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
