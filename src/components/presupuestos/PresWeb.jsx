"use client";

import { useState } from "react";

const PresWeb = () => {
  const [servicio, setServicio] = useState("");
  const [calidadDiseno, setCalidadDiseno] = useState("");
  const [calidadDesarrollo, setCalidadDesarrollo] = useState("");
  const [calidadModelado, setCalidadModelado] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a través de WhatsApp
    const mensaje = `Solicitud de presupuesto:
      Servicio: ${servicio}
      Calidad de diseño: ${calidadDiseno}
      Calidad de desarrollo web: ${calidadDesarrollo}
      Calidad de modelado 3D: ${calidadModelado}
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}`;
    // Aquí puedes usar una librería para enviar un mensaje a través de WhatsApp
    console.log(mensaje);
  };

  return (
    <>
      <form
        className=" justify-center items-center border border-[var(--button-dark)] py-10 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px] lg:w-[700px] sombra-inactiva grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col col-span-2 text-sm mb-1 text-amber-100 font-extralight">
          <label
            className="text-sm mb-1 text-amber-100 font-extralight"
            htmlFor="servicio"
          ></label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-amber-200/ block w-full p-2.5 dark:bg-gray-800 dark:border-amber-100 dark:placeholder-gray-700 dark:text-white dark:focus:ring-amber-200 dark:focus:border-amber-200 mb-2"
            id="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="" disabled selected>
              Selecciona una opción
            </option>
            <option
              className="text-sm  text-amber-100 font-extralight"
              value="Plan Inicial"
            >
              Plan Inicial
            </option>
            <option
              className="text-sm mb-1 text-amber-100 font-extralight"
              value="Plan Emprendedores"
            >
              Plan Emprendedores
            </option>
            <option
              className="text-sm mb-1 text-amber-100 font-extralight"
              value="Plan Negocios"
            >
              Plan Negocios
            </option>
            <option
              className="text-sm mb-1 text-amber-100 font-extralight"
              value="Plan Empresarial"
            >
              Plan Empresarial
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm mb-1 text-amber-100 font-extralight"
            htmlFor="calidadDiseno"
          >
            Calidad de diseño:
          </label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
            type="text"
            id="calidadDiseno"
            value={calidadDiseno}
            onChange={(e) => setCalidadDiseno(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm mb-1 text-amber-100 font-extralight"
            htmlFor="calidadDesarrollo"
          >
            Calidad de desarrollo web:
          </label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
            type="text"
            id="calidadDesarrollo"
            value={calidadDesarrollo}
            onChange={(e) => setCalidadDesarrollo(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            className="text-sm mb-1 text-amber-100 font-extralight"
            htmlFor="calidadModelado"
          >
            Calidad de modelado 3D:
          </label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] focus:outline-none text-sm mb-1 text-amber-100 font-extralight"
            type="text"
            id="calidadModelado"
            value={calidadModelado}
            onChange={(e) => setCalidadModelado(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-sm mb-1 text-amber-100 font-extralight">
          <label htmlFor="nombre">Nombre:</label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-sm mb-1 text-amber-100 font-extralight">
          <label htmlFor="email">Email:</label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-sm mb-1 text-amber-100 font-extralight">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
      </form>
      <button
        className="w-[250px] flex justify-center items-center text-[var(--font-light)] bg-amber-200/90 px-8 py-4 rounded-full sombra-light-amber border border-[var(--card-light)] m-10 mx-auto text-slate-800"
        type="submit"
      >
        Pedir ahora
      </button>
    </>
  );
};

export default PresWeb;
