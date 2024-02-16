"use client";

import React, { useState } from "react";

const Planes = () => {
  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState(null);

  // Array de objetos que contiene la información de los cuatro planes
  const planes = [
    {
      title: "Plan Básico",
      options: [
        {
          id: "basic-six",
          price: "$99",
          duration: " / 6 meses",
          description: [
            "Sitio web de una página",
            "Diseño personalizado",
            "Dominio gratuito por un año",
            "Soporte por correo electrónico",
            "Precio: $299",
          ],
        },
        {
          id: "basic-twelve",
          price: "$189",
          duration: " / 12 meses",
          description: [
            "Sitio web de hasta 5 páginas",
            "Diseño responsive",
            "Integración con redes sociales",
            "Dominio gratuito por un año",
            "Soporte por correo electrónico y teléfono",
            "Precio: $499",
          ],
        },
      ],
    },
    {
      title: "Plan Distinción",
      options: [
        {
          id: "popular-six",
          price: "$99",
          duration: " / 6 meses",
          description: [
            "Sitio web de hasta 10 páginas",
            "Diseño personalizado con múltiples revisiones",
            "SEO básico",
            "Integración con redes sociales y Google Analytics",
            "Soporte por correo electrónico, teléfono y chat en vivo",
          ],
        },
        {
          id: "popular-twelve",
          price: "$189",
          duration: " / 12 meses",
          description: [
            "Sitio web de hasta 20 páginas",
            "Diseño avanzado con animaciones y efectos visuales",
            "SEO avanzado",
            "Integración con redes sociales, Google Analytics y herramientas de marketing automatizado",
            "Soporte prioritario 24/7 por correo electrónico, teléfono y chat en vivo",
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
    <div className="bg-gray-800/20 backdrop-blur-lg flex items-center justify-center font-nunito text-gray-600 m-36 rounded-lg shadow-md">
      <section className="max-w-[968px] w-full mx-4">
        <h1 className="text-6xl text-center font-serif text-slate-400 py-10">
          Planes de <span className="text-amber-100">Desarrollo Web</span>
        </h1>
        <div className="flex flex-wrap justify-between">
          {planes.map((plan, index) => (
            <ul
              key={index}
              className="w-[calc(50%-1rem)] bg-gray-800/20 backdrop-blur-lg p-8 rounded-lg gap-3 flex items-start justify-center shadow-md flex-col mb-10"
            >
              <li className="pr-4 grow">
                <h2 className="mb-3 text-amber-100 text-center text-3xl font-serif mt-3 ">
                  {plan.title}
                </h2>
                <section>
                  {plan.options.map((option) => (
                    <>
                      <label
                        htmlFor={option.id}
                        className="flex items-center justify-start w-full gap-0 p-3 font-semibold cursor-pointer my-10 text-blue-400"
                      >
                        <input
                          type="radio"
                          className="w-[20px] aspect-square"
                          name="plan-options"
                          id={option.id}
                          checked={selectedOption === option.id}
                          onChange={() => handleOptionChange(option.id)}
                        />
                        <span className="inline-block pl-3 text-xl pr-2">
                          {option.price}
                        </span>
                        <span className="text-sm text-gray-100">
                          {option.duration}
                        </span>
                      </label>
                      <ul>
                        {option.description.map((desc, index) => (
                          <li className="text-gray-200 font-light" key={index}>{desc}</li>
                        ))}
                      </ul>
                    </>
                  ))}
                </section>
              </li>
            </ul>
          ))}
        </div>
        <p className="max-w-xl m-auto text-sm text-center text-amber-100 italic font-light">
          Ten en cuenta que las características y servicios incluidos en cada
          plan de páginas web pueden variar. Por favor, revisa detenidamente los
          detalles de cada plan antes de realizar tu elección.
        </p>
        <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-amber-200/90 px-8 py-4 rounded-full sombra-light border border-[var(--card-light)] m-10 mx-auto text-slate-800">
          Pedir ahora
        </button>
      </section>
    </div>
  );
};

export default Planes;
