"use client";

import React, { useEffect, useState } from "react";

import ModalGrafico from "@/components/ModalGrafico";

const Grafico = () => {
  const caracteristicas = [
    {
      titulo: "Creatividad",
    },
    {
      titulo: "Eficiencia",
    },
    {
      titulo: "Prototipos",
    },
    {
      titulo: "Marca",
    },
    {
      titulo: "Flexibilidad",
    },
  ];

  const modalgrafica = [
    {
      titulo: "Libertad Creativa",
      descripcion:
        "Las herramientas de diseño ofrecen un lienzo digital sin restricciones, brindando a los diseñadores la libertad de explorar su creatividad sin límites. Desde logotipos y carteles hasta interfaces de usuario, cualquier idea puede tomar forma con herramientas versátiles.",
    },
    {
      titulo: "Colaboración Eficiente",
      descripcion:
        "La capacidad de colaborar en tiempo real es una de las principales ventajas. Varios diseñadores pueden trabajar simultáneamente en un proyecto, facilitando la comunicación y garantizando una mayor eficiencia en el proceso creativo.",
    },
    {
      titulo: "Prototipos Interactivos",
      descripcion:
        "La creación de prototipos interactivos ofrece a los diseñadores la posibilidad de simular la experiencia del usuario antes de la implementación final. Esto garantiza un diseño centrado en el usuario y facilita la toma de decisiones informadas.",
    },
    {
      titulo: "Consistencia de Marca",
      descripcion:
        "El diseño gráfico es esencial para establecer y mantener la consistencia de la marca. Facilita la creación de bibliotecas de componentes reutilizables, asegurando que cada elemento visual siga las pautas de la marca de manera coherente.",
    },
    {
      titulo: "Optimización de Recursos",
      descripcion:
        "Los diseñadores pueden optimizar recursos y tiempos de desarrollo al trabajar en un entorno centralizado. Esto se traduce en una mayor eficiencia y en la capacidad de entregar proyectos de alta calidad en plazos ajustados.",
    },
    {
      titulo: "Pruebas y Retroalimentación Iterativa",
      descripcion:
        "Simplifica el proceso de prueba y retroalimentación al permitir la fácil revisión de diseños. Los clientes y equipos pueden proporcionar comentarios específicos directamente en el diseño, facilitando iteraciones rápidas y mejorando la satisfacción del cliente.",
    },
    {
      titulo: "Adaptabilidad y Escalabilidad",
      descripcion:
        "Las herramientas de diseño proporcionan la flexibilidad necesaria para adaptarse a diferentes formatos y tamaños. Esto es crucial en un mundo digital en constante evolución, donde la adaptabilidad y la escalabilidad son fundamentales para el éxito.",
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
      <section className="mt-20 lg:mt-40 mb-40" id="diseno-grafico">
        <figure className="flex flex-col items-end py-10">
          <h2 className="text-6xl font-serif text-slate-400 py-10">
            Diseño <span className="text-amber-100">Gráfico</span>
          </h2>
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
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
        <section className="grid lg:grid-cols-5 justify-center gap-8 pt-2 mb-14">
          {caracteristicas.map(({ titulo }, index) => (
            <div
              className="text-[var(--dark)] col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]"
              key={index}
            >
              <h1 className="text-sm text-sm:ml-48 ml-2">{titulo}</h1>
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

          <ModalGrafico isOpen={isModalOpen} onClose={closeModal}>
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
              {modalgrafica.map(({ titulo, descripcion }) => (
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
          </ModalGrafico>
        </div>
      </section>
    </>
  );
};

export default Grafico;
