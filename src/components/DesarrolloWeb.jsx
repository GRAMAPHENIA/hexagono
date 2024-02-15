"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import ModalWeb from "@/components/ModalWeb.jsx";

const DesarrolloWeb = () => {
  const caracteristicas = [
    {
      titulo: "Diseño Responsivo",
    },
    {
      titulo: "Experiencia Usuario",
    },
    {
      titulo: "Optimización y SEO",
    },
    {
      titulo: "Redes Sociales",
    },
    {
      titulo: "Estándares Web",
    },
  ];

  const modalweb = [
    {
      titulo: "Diseño Responsivo",
      descripcion:
        "Un diseño responsivo garantiza una experiencia fluida en diversos dispositivos, desde computadoras de escritorio hasta smartphones y tabletas. Esto es crucial ya que los usuarios acceden a la web desde una variedad de dispositivos, y un diseño adaptable mejora la accesibilidad y retención de visitantes.",
    },
    {
      titulo: "Experiencia de Usuario (UX)",
      descripcion:
        "La UX se refiere a la satisfacción del usuario al interactuar con tu sitio. Un diseño intuitivo, navegación fácil y contenido relevante contribuyen a una experiencia positiva. La retención de usuarios y la probabilidad de conversión aumentan cuando la experiencia es placentera y sin complicaciones.",
    },
    {
      titulo: "Optimización y SEO",
      descripcion:
        "La optimización del sitio para motores de búsqueda (SEO) es esencial para aumentar la visibilidad en los resultados de búsqueda. Un buen SEO mejora el ranking del sitio web, aumentando así la probabilidad de ser encontrado por potenciales clientes. Elementos como palabras clave, etiquetas y contenido de calidad son fundamentales.",
    },
    {
      titulo: "Redes Sociales",
      descripcion:
        "Las redes sociales son una poderosa herramienta de marketing. Integrar botones de compartir, mostrar feeds en el sitio y promover la participación en plataformas sociales aumenta la visibilidad. Además, permite la conexión directa con la audiencia y la promoción orgánica a través de la participación del usuario.",
    },
    {
      titulo: "Estándares Web",
      descripcion:
        "Cumplir con los estándares web garantiza la compatibilidad con diferentes navegadores y dispositivos. Esto no solo mejora la accesibilidad, sino que también facilita el mantenimiento y la actualización del sitio. Cumplir con las normas actuales es clave para la durabilidad y sostenibilidad de la presencia en línea.",
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
      <section className="my-20" id="desarrollo-web">
        <figure className="flex flex-col items-center py-10">
          <Image
            src="/titulos/web.svg"
            alt="Imagen para la sección que destaca el desarrollo web"
            width={500}
            height={100}
            className=""
          />
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
              ¡Destaca tu Presencia Digital con Nuestros Servicios de Desarrollo
              Web!
            </span>
            <br />
            <br />
            En el dinámico mundo actual, la presencia digital es clave para el
            éxito de cualquier negocio. Entendiendo la importancia de tener una
            presencia en línea sólida y atractiva es que ofrecemos servicios de
            desarrollo web de alta calidad para impulsar las marcas y que
            destaquen en el vasto universo digital.
          </p>
        </figure>
        <section className="grid lg:grid-cols-5 justify-center gap-8 pt-2">
          {caracteristicas.map(({ titulo }, index) => (
            <div
              className="text-[var(--dark)] col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]"
              key={index}
            >
              <h1 className="text-sm text-sm:ml-48 ml-2">{titulo}</h1>
            </div>
          ))}
        </section>
        <div className="flex justify-center lg:justify-start my-14">
          <button
            onClick={openModal}
            className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          >
            Saber Más
          </button>
          <ModalWeb isOpen={isModalOpen} onClose={closeModal}>
            {/* Aca se escribe el contenido que se ve en el children */}

            <h2 className="text-2xl mt-32 lg:mt-14 lg:text-7xl text-amber-100 p-2 lg:p-8 text-center font-black">
              <span className="text-amber-200">Desarrollo Web:</span> Elementos
              Clave para una Página Exitosa
              <span className="text-amber-200">.</span>
            </h2>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-14 italic antialiased">
              &quot;Al incorporar estos elementos en el desarrollo de tu página
              web, no solo estás construyendo una plataforma visualmente
              atractiva, sino también una herramienta efectiva para atraer,
              retener y convertir visitantes en clientes potenciales.&quot;
            </p>

            <ul className="text-center lg:text-left">
              {modalweb.map(({ titulo, descripcion }) => (
                <li
                  className="px-8 text-left lg:px-32 mb-14 text-2xl"
                  key={titulo}
                >
                  <h2 className="mb-4 underline underline-offset-4 decoration-[var(--font-semi-light)] text-amber-50 font-extrabold">
                    {titulo}
                  </h2>
                  <p className="pb-14 text-lg font-extralight antialiased">
                    {descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </ModalWeb>
        </div>
      </section>
    </>
  );
};

export default DesarrolloWeb;
