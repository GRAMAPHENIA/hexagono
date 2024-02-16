"use client";

import React, { useState } from "react";

const Planes = () => {
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Array de objetos que contiene la información de los cuatro planes
  const planes = [
    {
      title: "Básico",
      options: [
        {
          id: "basic-six",
          titulo: "Inicial",
          price: "$112",
          duration: " / 3 meses",
          description: [
            "Sitio web de una página",
            "Diseño personalizado",
            "Dominio gratuito por un año",
            "Soporte por correo electrónico",
            "Un solo pago de: $299",
          ],
        },
        {
          id: "basic-twelve",
          titulo: "Emprendedores",
          price: "$135",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 5 páginas",
            "Diseño responsive",
            "Integración con redes sociales",
            "Dominio gratuito por un año",
            "Soporte por correo electrónico y teléfono",
            "Un solo pago de: $499",
          ],
        },
      ],
    },
    {
      title: "Premiun",
      options: [
        {
          id: "popular-six",
          titulo: "Negocios",
          price: "$155",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 10 páginas",
            "Diseño personalizado con múltiples revisiones",
            "SEO básico",
            "Integración con redes sociales y Google Analytics",
            "Soporte por correo electrónico, teléfono y chat en vivo",
            "Un solo pago de: $299",
          ],
        },
        {
          id: "popular-twelve",
          titulo: "Empresarial",
          price: "$170",
          duration: " / 3 meses",
          description: [
            "Sitio web de hasta 20 páginas",
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

  // Función para manejar el cambio de la opción seleccionada
  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  return (
    <>
      <h2
        className="text-6xl text-center font-serif text-slate-400 pt-10 mt-40"
        id="planes"
      >
        Planes de <span className="text-amber-100">Desarrollo Web</span>
      </h2>
      <h4
        className="text-2xl text-center font-serif text-slate-400 pt-10"
        id="planes"
      >
        Elegi uno y pedilo.
      </h4>
      <div className="bg-gray-800/20 backdrop-blur-lg flex items-center justify-center font-nunito text-gray-600 mx-36 my-10 rounded-lg shadow-md py-4 mb-40">
        <section className="max-w-[968px] w-full mx-4">
          <div className="flex flex-wrap justify-between">
            {planes.map((plan, index) => (
              <ul
                key={index}
                className="w-[calc(50%-1rem)] bg-gray-800/20 backdrop-blur-lg p-8 rounded-lg gap-3 flex items-start justify-center shadow-md flex-col mb-10"
              >
                <li className="grow">
                  <h2 className="mb-3 text-amber-100 text-center text-7xl font-serif mt-10 ">
                    {plan.title}
                  </h2>
                  <section className="">
                    {plan.options.map((option, optIndex) => (
                      <>
                        <h2 className=" mt-20 text-[var(--dark)] lg:col-span-1 flex justify-center items-center bg-[var(--font-semi-light)] p-2 py-2 mb-20 rounded-sm sombra-inactiva border border-[var(--border-card-dark)]">
                          {option.titulo}
                        </h2>
                        <ul>
                          {option.description.map((desc, index) => (
                            <li
                              className="text-gray-200 font-light list-disc ml-16"
                              key={index}
                            >
                              {desc}
                            </li>
                          ))}
                          {plan.title === "Plan Premiun" && optIndex === 0 && (
                            <span className="absolute slide-in-top bg-amber-100/30 text-amber-50 px-24 py-[4px] rounded-br-lg left-0 top-0 text-sm border-2 border-t-0 border-l-0 border-b-amber-100 border-r-amber-100 rounded-tl-lg">
                              Más Popular
                            </span>
                          )}
                        </ul>
                        <label
                          htmlFor={option.id}
                          className="flex text-2xl items-center justify-center w-full gap-0 p-3 font-semibold cursor-pointer my-10 text-blue-400"
                        >
                          <div className="radio-container ">
                            <input
                              type="radio"
                              className="custom-radio flex justify-center align-middle"
                              name="plan-options"
                              id={option.id}
                              checked={selectedOption === option.id}
                              onChange={() => handleOptionChange(option.id)}
                            />
                          </div>

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
          <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-amber-200/90 px-8 py-4 rounded-full sombra-light-amber border border-[var(--card-light)] m-10 mx-auto text-slate-800">
            Pedir ahora
          </button>
        </section>
      </div>
    </>
  );
};

export default Planes;
