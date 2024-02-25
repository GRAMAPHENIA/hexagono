"use client";

import React, { useState } from "react";
import Link from "next/link";

import ElegirPlanesWeb from "@/components/planes/ElegirPlanesWeb";

// import PresWeb from "@/components/presupuestos/PresWeb";

const PlanesWeb = () => {
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Array de objetos que contiene la información de los cuatro planes
  const planes = [
    {
      title: "Elemental",
      options: [
        {
          id: "0",
          titulo: "Plan Inicial",
          price: "$112",
          duration: " / 3 meses",
          description: [
            "Sitio web de una página",
            "Diseño responsive",
            "Diseño personalizado",
            "Soporte por correo electrónico",
            "Un solo pago de: $299",
          ],
        },
        {
          id: "1",
          titulo: "Plan Emprendedores",
          price: "$135",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 5 páginas",
            "Diseño responsive",
            "Integración con redes sociales",
            "Soporte por correo electrónico y teléfono",
            "Un solo pago de: $499",
          ],
        },
      ],
    },
    {
      title: "Premium",
      options: [
        {
          id: "2",
          titulo: "Plan Negocios",
          price: "$155",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 10 páginas",
            "Diseño responsive",
            "Diseño personalizado con múltiples revisiones",
            "SEO básico",
            "Integración con redes sociales y Google Analytics",
            "Soporte por correo electrónico, teléfono y chat en vivo",
            "Un solo pago de: $299",
          ],
        },
        {
          id: "3",
          titulo: "Plan Empresarial",
          price: "$170",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 20 páginas",
            "Diseño responsive",
            "Diseño avanzado con animaciones y efectos visuales",
            "SEO avanzado",
            "Integración con redes sociales, Google Analytics y herramientas de marketing automatizado",
            "Soporte prioritario 24/7 por correo electrónico, teléfono y chat en vivo",
            "Un solo pago de: $299",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <section className="relative mt-44 ml-8 lg:ml-10 lg:mt-0">
        <h1 className="mx-auto text-8xl font-serif text-amber-100 ml-52 tracking-tight leading-[80px]">
          <span className="">planes de</span>
          <br />
          desarrollo
          <br />
          <span className="">web</span>
        </h1>
      </section>
      <p className="text-sm top-[22px] left-[22px] lg:text-xl lg:top-[-30px] lg:left-[25px] font-extralight col-span-5 sm:ml-[260px] sm:w-80 text-[--font-light] text-amber-100">
        <span className="text-gray-400">Concepto</span> ||{" "}
        <span className="text-gray-400">Hexágono</span>
      </p>

      <div className="flex items-center justify-center font-nunito text-gray-600 mt-80 lg:mx-20 my-16 py-10 mb-10">
        <section className="max-w-[968px] w-full lg:mx-4">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {planes.map((plan, index) => (
              <ul
                key={index}
                className="col-span-1 w-auto bg-gray-800/20 backdrop-blur-lg p-8 rounded-lg gap-3 flex items-start justify-center shadow-md flex-col mb-10 border border-slate-700 m-0 lg:m-8"
              >
                <li className="grow">
                  <h2 className="mb-3 text-amber-100 text-center text-5xl lg:text-7xl font-serif mt-10 ">
                    {plan.title}
                  </h2>
                  <section className="">
                    {plan.options.map((option, optIndex) => (
                      <>
                        <h2 className="mt-20 text-[var(--dark)] lg:col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 mb-20 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]">
                          {option.titulo}
                        </h2>
                        <ul className="my-4">
                          {option.description.map((desc, index) => (
                            <li
                              className="list-disc lg:ml-16 text-amber-50 font-extralight mb-2" // Ajusta la clase mb-2 para agregar espacio entre los elementos
                              key={index}
                            >
                              {desc}
                            </li>
                          ))}

                          {plan.title === "Elemental" && optIndex === 0 && (
                            <span className="absolute text-md slide-in-top left-0 top-0 px-24 py-[4px] rounded-br-lg bg-amber-100 text-amber-950 border border-t-0 border-l-0 border-b-gray-600 border-r-gray-600 rounded-tl-lg sombra-inactiva-planes">
                              Popular
                            </span>
                          )}
                        </ul>

                        <label
                          htmlFor={option.id}
                          className="flex text-2xl items-center justify-center w-full gap-0 p-3 font-semibold  my-10 text-blue-400"
                        >
                          <span className="inline-block pl-3 text-4xl px-2">
                            {option.price}
                          </span>
                          <span className="text-2xl font-extralight text-blue-200/90">
                            {option.duration}
                          </span>
                        </label>
                      </>
                    ))}
                  </section>
                </li>
              </ul>
            ))}
          </div>
          <p className="max-w-xl m-auto text-sm text-center text-amber-100 italic font-light">
            <span className="text-rose-400 text-xl">*</span> Ten en cuenta que
            las características y servicios incluidos en cada plan de páginas
            web pueden variar. Por favor, revisa detenidamente los detalles de
            cada plan antes de realizar tu elección.
          </p>
        </section>
      </div>
      {/* MODAL para ELEGIR PLANES */}
      <ElegirPlanesWeb />
    </>
  );
};

export default PlanesWeb;
