"use client";

import { useState } from "react";

// Componente para las preguntas relacionadas con el desarrollo web
const PreguntasDesarrollo = ({ plan }) => {
  switch (plan) {
    case "Plan Inicial":
      return (
        <>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="objetivo">Propósito principal del sitio web:</label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2  text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="objetivo"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="diseno">
              Diseño o funcionalidad específica deseada:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="diseno"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="tecnologia">Preferencia de tecnología:</label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="tecnologia"
            />
          </div>
        </>
      );
    case "Plan Emprendedores":
      return (
        <>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="interactividad">
              Tipo de interactividad esperada:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="interactividad"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="ecommerce">
              Requisitos de e-commerce (si aplica):
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="ecommerce"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="redesSociales">
              Integraciones con redes sociales:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="redesSociales"
            />
          </div>
        </>
      );
    case "Plan Negocios":
      return (
        <>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="publicoObjetivo">Público objetivo principal:</label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="publicoObjetivo"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="areasMembresia">
              Áreas de membresía o acceso restringido:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="areasMembresia"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="funcionPersonalizada">
              Función personalizada deseada:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="funcionPersonalizada"
            />
          </div>
        </>
      );
    case "Plan Empresarial":
      return (
        <>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="objetivosLargoPlazo">
              Objetivos a largo plazo:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="objetivosLargoPlazo"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="integracionesAvanzadas">
              Integraciones de (bases de datos, CMS, etc.):
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="integracionesAvanzadas"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight">
            <label htmlFor="requisitosSeguridad">
              Requisitos de seguridad específicos:
            </label>
            <input
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 mt-2 text-[var(--font-light)] font-extralight focus:outline-none input-style"
              type="text"
              id="requisitosSeguridad"
            />
          </div>
        </>
      );
    default:
      return null;
  }
};

const PresWeb = () => {
  const [servicio, setServicio] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");

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
        className="justify-center items-center py-10 p-4 lg:p-8 mt-20 mx-auto w-[340px] lg:w-[700px]  grid grid-cols-1 lg:grid-cols-2 gap-4"
        onSubmit={handleSubmit}
      >
        <div className="col-span-2 text-sm mb-1 text-amber-100 font-extralight">
          <label htmlFor="servicio"></label>
          <select
            className="col-span-2 lg:col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-amber-200/ block w-full p-2.5 dark:bg-gray-800 dark:border-amber-100 dark:placeholder-gray-700 dark:text-white dark:focus:ring-amber-200 dark:focus:border-amber-200 mb-2"
            id="servicio"
            value={servicio}
            onChange={(e) => setServicio(e.target.value)}
          >
            <option value="" disabled>
              Selecciona un Plan
            </option>
            <option value="Plan Inicial">Plan Inicial</option>
            <option value="Plan Emprendedores">Plan Emprendedores</option>
            <option value="Plan Negocios">Plan Negocios</option>
            <option value="Plan Empresarial">Plan Empresarial</option>
          </select>
        </div>

        {/* Preguntas relacionadas con el desarrollo web */}
        <PreguntasDesarrollo plan={servicio} />

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
        <button
          className="w-[250px] col-span-2 flex justify-center items-end bg-amber-200/90 hover:bg-amber-200 px-8 py-4 rounded-full sombra-light-amber border border-slate-600/40 m-10 mx-auto text-slate-800 hover:text-[#171c21]"
          type="submit"
        >
          Pedir ahora
        </button>
      </form>
    </>
  );
};

export default PresWeb;
