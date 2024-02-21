"use client";
import { useState } from "react";

const preguntasPorPlan = {
  "Elemental - Plan Inicial": [
    {
      pregunta: "¿Cuál es el propósito de tu página?",
      opciones: [
        "Capturar leads",
        "Promocionar un producto o servicio",
        "Evento o lanzamiento de producto",
        "Otro",
      ],
    },
    {
      pregunta: "¿Qué información deseas incluir?",
      opciones: [
        "Descripción breve del producto/servicio",
        "Ventajas y beneficios",
        "Llamado a la acción",
        "Testimonios de clientes",
        "Otro",
      ],
    },
    {
      pregunta: "¿Tenes un diseño en mente?",
      opciones: [
        "Minimalista y limpio",
        "Colorido y llamativo",
        "Profesional y corporativo",
        "Moderno y creativo",
        "Otro",
      ],
    },
    {
      pregunta: "¿Cuál será la acción principal?",
      opciones: [
        "Suscribirse al boletín informativo",
        "Descargar un recurso gratuito",
        "Solicitar una demostración",
        "Realizar una compra",
        "Otro",
      ],
    },
  ],
  "Elemental - Plan Emprendedores": [
    {
      pregunta: "¿Cuál es el propósito de tu sitio web?",
      opciones: [
        "Promocionar productos o servicios",
        "Informar sobre tu empresa",
        "Generar leads o contactos",
        "Vender productos en línea",
        "Otro",
      ],
    },
    {
      pregunta: "¿Qué funcionalidades te gustaría incluir?",
      opciones: [
        "Formulario de contacto",
        "Catálogo de productos o servicios",
        "Integración con redes sociales",
        "Galería de imágenes",
        "Blog",
        "Otro",
      ],
    },
    {
      pregunta: "¿Tenes contenido multimedia?",
      opciones: [
        "Sí, tengo imágenes de alta calidad",
        "Sí, tengo videos",
        "No, necesito ayuda para crear contenido",
        "No, solo tengo contenido textual",
        "Otro",
      ],
    },
    {
      pregunta: "¿Tenes la estructura de navegación?",
      opciones: [
        "Sí, tengo una idea clara de la estructura",
        "No, necesito ayuda para definirla",
        "No, confío en el equipo de diseño",
        "Otro",
      ],
    },
  ],
  "Premium - Plan Negocios": [
    {
      pregunta: "¿Cuál es el objetivo principal de tu sitio?",
      opciones: [
        "Generar ventas",
        "Aumentar la visibilidad de la marca",
        "Facilitar la comunicación con los clientes",
        "Dar información de productos/servicios",
        "Otro",
      ],
    },
    {
      pregunta: "¿Qué tipo de diseño prefieres?",
      opciones: [
        "Minimalista y moderno",
        "Colorido y llamativo",
        "Profesional y corporativo",
        "Creativo y fuera de lo común",
        "Otro",
      ],
    },
    {
      pregunta: "¿Qué funcionalidades son esenciales?",
      opciones: [
        "Formularios de contacto",
        "Galería de imágenes",
        "Integración con redes sociales",
        "Blog o sección de noticias",
        "SEO básico",
        "Otro",
      ],
    },
    {
      pregunta:
        "¿Qué tan familiarizado estás con el SEO?",
      opciones: [
        "Soy experto, se proporcionar contenido.",
        "Tengo conocimientos básicos",
        "No estoy familiarizado",
        "Otro",
      ],
    },
  ],
  "Premium - Plan Empresarial": [
    {
      pregunta: "¿Cuál es el objetivo principal de tu sitio?",
      opciones: [
        "Impulsar las ventas",
        "Mejorar la visibilidad de la marca",
        "Dar información de productos/servicios",
        "Ofrecer una experiencia de usuario única",
        "Otro",
      ],
    },
    {
      pregunta: "¿Qué tipo de diseño prefieres?",
      opciones: [
        "Minimalista y elegante",
        "Moderno y creativo",
        "Sofisticado y profesional",
        "Vibrante y llamativo",
        "Otro",
      ],
    },
    {
      pregunta:
        "¿Animaciones o efectos que incluirias?",
      opciones: [
        "Transiciones suaves entre secciones",
        "Animaciones de carga",
        "Efectos de paralaje",
        "Elementos interactivos",
        "Otro",
      ],
    },
    {
      pregunta: "¿Tienes contenido de alta calidad?",
      opciones: [
        "Sí, tengo contenido de alta resolución.",
        "Tengo algunas imágenes y videos",
        "No, necesito ayuda para crear contenido",
        "No, solo tengo contenido textual",
        "Otro",
      ],
    },
  ],
};

const PreguntasDesarrollo = ({ plan, respuestas, setRespuestas }) => {
  const handleRespuestaChange = (index, value) => {
    const newRespuestas = [...respuestas];
    newRespuestas[index] = value;
    setRespuestas(newRespuestas);
  };

  return preguntasPorPlan[plan]?.map((pregunta, index) => (
    <div
      key={index}
      className="col-span-2 lg:col-span-1 flex flex-col text-sm mb-1 text-amber-100 font-extralight select-wrapper"
    >
      <label htmlFor={`pregunta-${index + 1}`}></label>
      <select
        className="col-span-2 lg:col-span-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-amber-200/ block w-full p-2.5 dark:bg-gray-800 dark:border-amber-100 dark:placeholder-gray-700 dark:text-white dark:focus:ring-amber-200 dark:focus:border-amber-200 mb-2 cursor-pointer"
        id={`pregunta-${index + 1}`}
        value={respuestas[index]}
        onChange={(e) => handleRespuestaChange(index, e.target.value)}
      >
        <option value="" disabled>
          {pregunta.pregunta}
        </option>
        {pregunta.opciones.map((opcion, i) => (
          <option key={i} value={opcion}>
            {opcion}
          </option>
        ))}
      </select>
    </div>
  ));
};

const PresWeb = () => {
  const [servicio, setServicio] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [respuestas, setRespuestas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mensaje = `Solicitud de presupuesto:
      Servicio: ${servicio}
      Nombre: ${nombre}
      Email: ${email}
      Teléfono: ${telefono}
      Respuestas: ${respuestas}`;
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
              setRespuestas(
                Array(preguntasPorPlan[e.target.value].length).fill("")
              );
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
        {mostrarFormulario && (
          <PreguntasDesarrollo
            plan={servicio}
            respuestas={respuestas}
            setRespuestas={setRespuestas}
          />
        )}

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
