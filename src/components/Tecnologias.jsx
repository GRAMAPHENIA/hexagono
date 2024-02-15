"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import ModalTecnologia from "@/components/ModalTecnologia.jsx";

const Tecnologias = () => {
  const metodos = [
    {
      titulo: "html",
    },
    {
      titulo: "css",
    },
    {
      titulo: "js",
    },
    {
      titulo: "react",
    },
    {
      titulo: "nextjs",
    },
    {
      titulo: "tailwind",
    },
  ];

  const modaltecnologia = [
    {
      titulo: "HTML (Lenguaje de Marcado)",
      descripcion:
        "HTML es la columna vertebral de cualquier página web. Al proporcionar la estructura y organización del contenido, permite la creación de interfaces sólidas. Su uso correcto asegura una base semántica, accesible y bien estructurada para la información presentada en la web.",
    },
    {
      titulo: "CSS (Hojas de Estilo en Cascada)",
      descripcion:
        "CSS aporta estilo y diseño a las páginas web. La capacidad de dar formato, controlar la presentación y adaptar la apariencia a diferentes dispositivos garantiza una experiencia visualmente agradable para los usuarios. CSS es esencial para la creación de interfaces atractivas y coherentes.",
    },
    {
      titulo: "JavaScript",
      descripcion:
        "JavaScript proporciona dinamismo e interactividad a las páginas web. Como lenguaje de programación del lado del cliente, permite manipular el contenido en tiempo real, responder a eventos del usuario y mejorar significativamente la experiencia de navegación. Es la fuerza impulsora detrás de la web moderna.",
    },
    {
      titulo: "React (Biblioteca de JavaScript)",
      descripcion:
        "React es una biblioteca de JavaScript que simplifica el desarrollo de interfaces de usuario interactivas. Su enfoque en componentes reutilizables facilita la construcción y mantenimiento de aplicaciones web complejas. La virtualización del DOM mejora la eficiencia y velocidad de la interfaz.",
    },
    {
      titulo: "Next.js (Framework de React)",
      descripcion:
        "Next.js extiende las capacidades de React, facilitando la creación de aplicaciones web robustas y eficientes. Con funcionalidades como la representación del lado del servidor (SSR) y generación de páginas estáticas, optimiza el rendimiento y la carga inicial, mejorando la experiencia del usuario.",
    },
    {
      titulo: "Tailwind CSS (Framework de Estilos Utilitarios)",
      descripcion:
        "Tailwind CSS adopta un enfoque único al proporcionar clases utilitarias para el diseño, lo que permite una personalización rápida y eficiente. Facilita la creación de interfaces consistentes y modernas, optimizando el flujo de trabajo del desarrollo y asegurando un estilo coherente en toda la aplicación.",
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
      <section className="mt-20" id="tecnologias">
        <figure className="flex flex-col items-center py-10">
          <Image
            src="/titulos/tecnologias.svg"
            alt="Imagen para la sección que destaca el desarrollo tecnologías"
            width={400}
            height={100}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
              ¡Moderniza tu Espacio Virtual con Nuestro Estilo Tecnológico!
            </span>
            <br />
            <br />
            Utilizando herramientas avanzadas de desarrollo, creamos
            experiencias web modernas, optimizadas y dinámicas, fusionando
            diseño elegante con funcionalidad eficiente, elevando así la calidad
            y velocidad de nuestras páginas para ofrecer una navegación
            cautivadora y fluida.
          </p>
        </figure>
      </section>
      <section className="grid grid-cols-2 lg:grid-cols-6 justify-center gap-8 pt-2">
        {metodos.map(({ titulo }, index) => (
          <div
            className="text-[var(--dark)] lg:col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]"
            key={index}
          >
            <h2 className="text-sm text-sm:ml-48 ml-2">{titulo}</h2>
          </div>
        ))}
      </section>
      <div className="flex justify-center lg:justify-end mt-10 mb-20">
        <button
          onClick={openModal}
          className="col-span-6 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
        >
          Saber Más
        </button>

        <ModalTecnologia isOpen={isModalOpen} onClose={closeModal}>
          {/* Aca se escribe el contenido que se ve en el children */}

          <h1 className="text-2xl mt-32 lg:mt-14 lg:text-7xl text-amber-100 p-2 lg:p-8 text-center font-black">
            <span className="text-amber-200">Tecnologías Web: </span>
            Cimientos para un Desarrollo Dinámico e Innovador
            <span className="text-amber-200">.</span>
          </h1>
          <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-16 italic antialiased">
            &quot;La combinación de estas tecnologías web forma un conjunto
            poderoso y versátil que impulsa el desarrollo de aplicaciones y
            sitios web modernos. Desde la estructura y estilo hasta la dinámica
            y la eficiencia, cada tecnología desempeña un papel crucial en la
            creación de experiencias web ricas y atractivas.&quot;
          </p>

          <ul className="text-center lg:text-left">
            {modaltecnologia.map(({ titulo, descripcion }) => (
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
        </ModalTecnologia>
      </div>
    </>
  );
};

export default Tecnologias;
