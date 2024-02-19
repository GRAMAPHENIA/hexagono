"use client";

import { useState } from "react";


const preguntasPorPlan = {
  "Plan Inicial": [
    "Pregunta A para Plan Inicial",
    "Pregunta B para Plan Inicial",
    "Pregunta C para Plan Inicial",
    "Pregunta D para Plan Inicial",
  ],
  "Plan Emprendedores": [
    "Pregunta 1 para Plan Emprendedores",
    "Pregunta 2 para Plan Emprendedores",
    "Pregunta 3 para Plan Emprendedores",
    "Pregunta 4 para Plan Emprendedores",
  ],
  "Plan Negocios": [
    "Pregunta 1 para Plan Negocios",
    "Pregunta 2 para Plan Negocios",
    "Pregunta 3 para Plan Negocios",
    "Pregunta 4 para Plan Negocios",
  ],
  "Plan Empresarial": [
    "Pregunta 1 para Plan Empresarial",
    "Pregunta 2 para Plan Empresarial",
    "Pregunta 3 para Plan Empresarial",
    "Pregunta 4 para Plan Empresarial",
  ],
  // Agrega más planes si es necesario
};

const PreguntasDesarrollo = ({ plan }) => {
  return preguntasPorPlan[plan]?.map((pregunta, index) => (
    <div key={index} className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
      <label htmlFor={`pregunta-${index + 1}`}>{pregunta}:</label>
      <input
        className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
        type="text"
        id={`pregunta-${index + 1}`}
      />
    </div>
  ));
};

const PresWeb = () => {
  const [servicio, setServicio] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Solicitud de presupuesto:
      Servicio: ${servicio}
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}`;
    console.log(mensaje);
    // Aquí puedes agregar la lógica para enviar los datos a través de WhatsApp
  };

  return (
    <>
      <form
        className="justify-center items-center py-10 p-4 lg:p-8 mt-5 mx-auto w-[340px] lg:w-[700px]  grid grid-cols-1 lg:grid-cols-2 gap-4 "
        onSubmit={handleSubmit}
      >
        <div className="col-span-2 text-sm mb-1 text-amber-100 font-extralight select-wrapper">
          <label htmlFor="servicio"></label>
          <select
            className="col-span-2 lg:col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-amber-200/ block w-full p-2.5 dark:bg-gray-800 dark:border-amber-100 dark:placeholder-gray-700 dark:text-white dark:focus:ring-amber-200 dark:focus:border-amber-200 mb-2 cursor-pointer"
            id="servicio"
            value={servicio}
            onChange={(e) => {
              setServicio(e.target.value);
              setMostrarFormulario(true); // Mostrar el formulario cuando se selecciona un plan
            }}
          >
            <option value="" disabled>
              Selecciona un Plan...
            </option>
            {Object.keys(preguntasPorPlan).map((plan, index) => (
              <option key={index} value={plan}>
                {plan}
              </option>
            ))}
          </select>
        </div>

        {/* Preguntas relacionadas con el desarrollo web, solo si se ha seleccionado un plan */}
        {mostrarFormulario && <PreguntasDesarrollo plan={servicio} />}

        {/* Campos de nombre, email y teléfono, solo si se ha seleccionado un plan */}
        {mostrarFormulario && (
          <>
            <div className="col-span-2 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
              <label htmlFor="nombre">Nombre:</label>
              <input
                className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
              <label htmlFor="email">Email:</label>
              <input
                className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
          </>
        )}

        {/* Botón de enviar, solo si se ha seleccionado un plan */}
        {mostrarFormulario && (
          <button
            className="w-[250px] col-span-2 flex justify-center items-end bg-amber-200/90 hover:bg-amber-200 px-8 py-4 rounded-full sombra-light-amber border border-slate-600/40 m-10 mx-auto text-slate-800 hover:text-[#171c21]"
            type="submit"
          >
            Pedir ahora
          </button>
        )}
      </form>
    </>
  );
};

export default PresWeb;
