"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Modal from "@/components/Modal.jsx";

const Dominios = () => {
  const metodos = [
    {
      titulo: "personalidad",
    },
    {
      titulo: "Profesionalismo",
    },
    {
      titulo: "Control",
    },
    {
      titulo: "Notable",
    },
    {
      titulo: "Posicionamiento",
    },
    {
      titulo: "Flexibilidad",
    },
  ];
  const modaldominios = [
    {
      titulo: "Nombre de dominio personalizado",
      descripcion:
        "Obtener un nombre de dominio personalizado te permite tener una identidad única en línea que refleje tu personalidad, marca o negocio.",
    },
    {
      titulo: "Profesionalismo",
      descripcion:
        "Un dominio personalizado transmite profesionalismo y credibilidad a tus visitantes y clientes potenciales.",
    },
    {
      titulo: "Control total",
      descripcion:
        "Tener tu propio dominio te otorga control total sobre tu presencia en línea, incluyendo el diseño, contenido y funcionalidades de tu sitio web.",
    },
    {
      titulo: "Facilidad de recordación",
      descripcion:
        "Un nombre de dominio personalizado es más fácil de recordar para tus visitantes que una dirección web larga y genérica.",
    },
    {
      titulo: "Correo electrónico personalizado",
      descripcion:
        "Puedes crear direcciones de correo electrónico personalizadas basadas en tu nombre de dominio, lo que ayuda a fortalecer tu marca y profesionalismo.",
    },
    {
      titulo: "Posicionamiento en buscadores",
      descripcion:
        "Un dominio personalizado puede mejorar tu posicionamiento en los resultados de búsqueda, lo que facilita que las personas te encuentren en línea.",
    },
    {
      titulo: "Flexibilidad",
      descripcion:
        "Con tu propio dominio, tienes la flexibilidad para cambiar de proveedor de alojamiento web o redireccionar tu sitio según tus necesidades.",
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
      <section className="mt-20 lg:mt-40 mb-20" id="dominios">
        <figure className="flex flex-col items-end py-10">
          <h2 className="text-6xl text-center font-serif text-slate-400 py-10">
            Pedí tu <span className="text-amber-100">Dominio</span>
          </h2>
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
              La Base de tu Presencia en Línea
            </span>
            <br />
            <br />
            En el competitivo mundo digital actual, la identidad de tu marca es
            esencial. Nos especializamos en servicios de diseño web que no solo
            reflejan la esencia de tu negocio, sino que también establecen una
            conexión directa con tu audiencia en línea. Desde la selección del
            nombre de dominio hasta el diseño y desarrollo del sitio, trabajamos
            para destacarte en el panorama digital de manera efectiva y
            profesional.
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
        <div className="flex justify-center lg:justify-end mb-20">
          <button
            onClick={openModal}
            className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          >
            Saber Más
          </button>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            {/* Aca se escribe el contenido que se ve en el children */}

            <h1 className="text-2xl mt-32 lg:mt-14 lg:text-7xl text-amber-100 p-2 lg:p-8 text-center font-black">
              <span className="text-amber-200">Tu Presencia: </span>
              La Importancia del Dominio
              <span className="text-amber-200">.</span>
            </h1>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-16 italic antialiased">
              &quot;Los dominios son pilares esenciales en el panorama digital
              actual, brindando la base para establecer una presencia en línea
              efectiva y duradera. Al igual que el diseño gráfico, los dominios
              son herramientas fundamentales que permiten a las marcas destacar
              y dejar una impresión perdurable en el mundo virtual.&quot;
            </p>

            <ul className="text-center lg:text-left">
              {modaldominios.map(({ titulo, descripcion }) => (
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

export default Dominios;
