"use client";

import React, { useEffect, useState } from "react";

import Modal3D from "@/components/modales/Modal3D.jsx";

const Modelado3D = () => {
  const metodos = [
    {
      titulo: "Modelado",
    },
    {
      titulo: "Iluminación",
    },
    {
      titulo: "Texturización",
    },
    {
      titulo: "Animación",
    },
    {
      titulo: "Rigging",
    },
    {
      titulo: "Optimización",
    },
  ];
  const modal3d = [
    {
      titulo: "Técnica de Modelado 3D",
      descripcion:
        "La calidad del modelado 3D es esencial para la creación de entornos virtuales impactantes y realistas. La precisión en la representación de objetos y escenas contribuye significativamente a la inmersión del usuario. Utilizar técnicas avanzadas de modelado asegura resultados visuales impresionantes.",
    },
    {
      titulo: "Iluminación y Texturización",
      descripcion:
        "La iluminación adecuada y la texturización realista son clave para otorgar profundidad y autenticidad a los modelos 3D. Estos elementos influyen directamente en la percepción del espectador, generando ambientes visuales cautivadores y realistas.",
    },
    {
      titulo: "Optimización de Polígonos",
      descripcion:
        "La optimización de polígonos es esencial para garantizar un rendimiento eficiente, especialmente en entornos interactivos y experiencias en tiempo real. Un modelado 3D eficientemente optimizado permite una experiencia fluida y sin retrasos, incluso en dispositivos con recursos limitados.",
    },
    {
      titulo: "Animación y Rigging",
      descripcion:
        "La animación agrega vida a los modelos 3D, permitiendo narrar historias y simular movimientos naturales. Un rigging preciso, junto con animaciones fluidas, eleva la calidad de la presentación, facilitando la comprensión de conceptos y mejorando la experiencia del usuario.",
    },
    {
      titulo: "Realidad Virtual (VR) y Realidad Aumentada (AR)",
      descripcion:
        "El modelado 3D es esencial para la implementación exitosa de experiencias de VR y AR. La capacidad de crear entornos tridimensionales que se integran de manera coherente con el entorno del usuario agrega un nivel adicional de inmersión, llevando la interacción a nuevas alturas",
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
      <section className="my-20 mb-40" id="modelado-3d">
        <figure className="flex flex-col items-start py-10">
          <h2 className="text-6xl font-serif text-slate-400 py-10">
            Modelado <span className="text-amber-100">3D</span>
          </h2>
          <p className="text-[var(--font-light)] text-base lg:text-xl font-extralight text-center max-w-[720px] pb-10 border border-[var(--button-dark)] p-5 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm">
            <span className="text-amber-50 text-2xl lg:text-4xl font-light">
              ¡Eleva tu Presentación Visual con Nuestros Servicios de Modelado
              3D!
            </span>
            <br />
            <br />
            En el emocionante mundo visual de hoy, la incorporación de elementos
            tridimensionales puede marcar la diferencia entre destacar y pasar
            desapercibido. En Concepto Hexágono, nos especializamos en ofrecer
            servicios de modelado 3D que llevan la presentación visual de tu
            marca a nuevas alturas.
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
        <div className="flex justify-center lg:justify-start mb-14">
          <button
            onClick={openModal}
            className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]"
          >
            Saber Más
          </button>
          <Modal3D isOpen={isModalOpen} onClose={closeModal}>
            {/* Aca se escribe el contenido que se ve en el children */}

            <h2 className="text-2xl mt-32 lg:mt-14 lg:text-7xl text-amber-100 p-2 lg:p-8 text-center font-black">
              <span className="text-amber-200">Modelado 3D: </span> Pilares para
              Crear Entornos Virtuales Impactantes
              <span className="text-amber-200">.</span>
            </h2>
            <p className="text-[var(--font-semi-light)] text-center font-extralight p-8 lg:p-16 italic antialiased">
              &quot;Al integrar estos elementos en el proceso de modelado 3D, no
              solo estás creando representaciones visuales, sino construyendo
              mundos virtuales cautivadores y funcionales. Cada aspecto, desde
              la técnica de modelado hasta la implementación en tecnologías
              emergentes, contribuye a la creación de experiencias 3D que
              impactan y sorprenden a la audiencia.&quot;
            </p>

            <ul className="text-center lg:text-left">
              {modal3d.map(({ titulo, descripcion }) => (
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
          </Modal3D>
        </div>
      </section>
    </>
  );
};

export default Modelado3D;
