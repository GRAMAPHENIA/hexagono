"use client";

import React, { useState } from "react";

import Image from "next/image";
import ModalGrafico from "@/components/ModalGrafico.jsx";

const Grafico = () => {
  const modalgrafica = [
    {
      titulo: "Creatividad sin Límites",
      descripcion:
        "Figma y otros softwares de diseño ofrecen un lienzo digital sin restricciones, brindando a los diseñadores la libertad de explorar su creatividad sin límites. Desde logotipos y carteles hasta interfaces de usuario, cualquier idea puede tomar forma con herramientas versátiles.",
    },
    {
      titulo: "Colaboración en Tiempo Real",
      descripcion:
        "La capacidad de colaborar en tiempo real es una de las principales ventajas de Figma. Varios diseñadores pueden trabajar simultáneamente en un proyecto, facilitando la comunicación y garantizando una mayor eficiencia en el proceso creativo.",
    },
    {
      titulo: "Prototipos Interactivos",
      descripcion:
        "Figma permite la creación de prototipos interactivos, ofreciendo a los diseñadores la posibilidad de simular la experiencia del usuario antes de la implementación final. Esto garantiza un diseño centrado en el usuario y facilita la toma de decisiones informadas.",
    },
    {
      titulo: "Consistencia de Marca",
      descripcion:
        "El diseño gráfico es esencial para establecer y mantener la consistencia de la marca. Figma facilita la creación de bibliotecas de componentes reutilizables, asegurando que cada elemento visual siga las pautas de la marca de manera coherente.",
    },
    {
      titulo: "Optimización de Recursos",
      descripcion:
        "Con herramientas como Figma, los diseñadores pueden optimizar recursos y tiempos de desarrollo al trabajar en un entorno centralizado. Esto se traduce en una mayor eficiencia y en la capacidad de entregar proyectos de alta calidad en plazos ajustados.",
    },
    {
      titulo: "Pruebas y Retroalimentación Iterativa",
      descripcion:
        "Figma simplifica el proceso de prueba y retroalimentación al permitir la fácil revisión de diseños. Los clientes y equipos pueden proporcionar comentarios específicos directamente en el diseño, facilitando iteraciones rápidas y mejorando la satisfacción del cliente.",
    },
    {
      titulo: "Adaptabilidad y Escalabilidad",
      descripcion:
        "Los softwares de diseño proporcionan la flexibilidad necesaria para adaptarse a diferentes formatos y tamaños. Esto es crucial en un mundo digital en constante evolución, donde la adaptabilidad y la escalabilidad son fundamentales para el éxito.",
    },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <section className="mt-40 mb-20 ">
        <figure className="flex flex-col items-end py-10">
          <Image
            src="/titulos/grafico.svg"
            alt="Imagen para la  sección que destaca el diseño gráfico"
            width={500}
            height={200}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-4xl">
              ¡Impulsa tu Marca con Nuestros Servicios de Diseño Gráfico!
            </span>
            <br />
            <br />
            En el vibrante mundo visual de hoy, la identidad de tu marca es
            crucial. Nos especializamos en ofrecer servicios de diseño gráfico
            que no solo capturan la esencia de tu negocio, sino que también
            crean la conexión visual duradera con tu audiencia.
          </p>
        </figure>
        <div className="flex justify-center lg:justify-end mb-20">
          <button
            onClick={openModal}
            className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          >
            Saber Más
          </button>

          <ModalGrafico isOpen={isModalOpen} onClose={closeModal}>
            {/* Aca se escribe el contenido que se ve en el children */}

            <h1 className="text-7xl text-amber-100 p-8 text-center font-black">
            <span className="text-amber-200">Diseño Gráfico: </span>Transformando ideas en realidad
              <span className="text-amber-200">.</span>
            </h1>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-16 italic antialiased">
              &quot;El diseño gráfico es una herramienta fundamental en el mundo
              visual de hoy, permitiendo la creación de contenido impactante y
              memorable. Al aprovechar herramientas avanzadas como Figma y otros
              softwares de diseño, los diseñadores pueden llevar sus habilidades
              al siguiente nivel y ofrecer soluciones visuales
              excepcionales.&quot;
            </p>

            <ul className="text-center lg:text-left">
              {modalgrafica.map(({ titulo, descripcion }) => (
                <li className="px-32 mb-10 text-2xl" key={titulo}>
                  <h1 className="mb-4 underline underline-offset-4 decoration-[var(--font-semi-light)] text-amber-50 font-extrabold">
                    {titulo}
                  </h1>
                  <p className="pb-10 text-lg font-extralight antialiased">
                    {descripcion}
                  </p>
                </li>
              ))}
            </ul>
          </ModalGrafico>
        </div>
      </section>
    </>
  );
};

export default Grafico;
