"use client";

import { useState, useEffect } from "react";

import React from "react";

const Consultas = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map((error) => error.message).join(", "));
    } else {
      setMessage("Se ha enviado tu correo satisfactoriamente.");
      event.target.reset();
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const components = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;

    function checkScroll() {
      components.forEach((component) => {
        const componentTop = component.getBoundingClientRect().top;
        if (componentTop < windowHeight) {
          component.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", checkScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <>
      <section
        id="consultas"
        className="flex flex-col justify-center items-center border border-[var(--button-dark)] p-8 lg:p-1 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px] lg:w-[700px] m-20"
      >
        <form
          action="https://formspree.io/f/mqkrlgnv"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-md mx-auto my-6"
        >
          <figure
            className="mb-8 flex justify-center items-center m-4"
            // id="consultas"
          >
            <h2 className="text-6xl text-center font-serif text-slate-400">
              Hace tu <span className="text-amber-100">Consulta</span>
            </h2>
          </figure>

          <div className="mb-4">
            <label
              className="text-sm mb-1 text-amber-100 font-extralight"
              htmlFor="name"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="Nombre"
              className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
              required
            />
          </div>

          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:pr-2 mb-4">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="email"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="Correo Electrónico"
                className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
                required
              />
            </div>

            <div className="w-full lg:w-1/2 lg:pl-2 mb-4">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="phone"
              >
                Teléfono:
              </label>
              <input
                type="tel"
                id="phone"
                name="Teléfono"
                className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4 lg:mt-2">
            <label
              className="text-sm text-amber-100 font-extralight"
              htmlFor="message"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="Mensaje"
              className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none resize-none"
              rows="10"
              maxLength="300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex bg-amber-200/90 hover:bg-amber-200 px-8 py-2 rounded-full sombra-light-amber border border-slate-600/40 text-slate-800 hover:text-[#171c21] "
          >
            Enviar
          </button>

          {showMessage && (
            <p className="absolute font-extralight border border-gray-600 rounded p-4 bottom-2 -right-[25rem] bg-[#315348]">
              {" "}
              <span className="text-green-300">✓</span> {message}
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export default Consultas;
