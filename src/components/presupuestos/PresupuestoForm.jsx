"use client";

import { useState } from "react";

const PresupuestoForm = () => {
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
    <form
      className=" justify-center items-center border border-[var(--button-dark)] py-10 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px]  lg:w-[700px] mb-0 sombra-inactiva grid grid-cols-1 lg:grid-cols-2 gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col col-span-2 text-sm mb-1 text-amber-100 font-extralight">
        <label className="text-sm mb-1 text-amber-100 font-extralight" htmlFor="servicio"></label>
        <select
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="servicio"
          value={servicio}
          onChange={(e) => setServicio(e.target.value)}
        >
          <option className="text-sm mb-1 text-amber-100 font-extralight m-2" value="">Selecciona un servicio</option>
          <option className="text-sm mb-1 text-amber-100 font-extralight" value="Diseño gráfico">Diseño gráfico</option>
          <option className="text-sm mb-1 text-amber-100 font-extralight" value="Desarrollo web">Desarrollo web</option>
          <option className="text-sm mb-1 text-amber-100 font-extralight" value="Modelado 3D">Modelado 3D</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-sm mb-1 text-amber-100 font-extralight" htmlFor="calidadDiseno">Calidad de diseño:</label>
        <input
          className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
          type="text"
          id="calidadDiseno"
          value={calidadDiseno}
          onChange={(e) => setCalidadDiseno(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm mb-1 text-amber-100 font-extralight" htmlFor="calidadDesarrollo">Calidad de desarrollo web:</label>
        <input
          className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
          type="text"
          id="calidadDesarrollo"
          value={calidadDesarrollo}
          onChange={(e) => setCalidadDesarrollo(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label className="text-sm mb-1 text-amber-100 font-extralight" htmlFor="calidadModelado">Calidad de modelado 3D:</label>
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
      <button type="submit">Enviar</button>
    </form>
  );
};

export default PresupuestoForm;
