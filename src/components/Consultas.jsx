// const Consultas = () => {
//   return (
//     <>
//       <figure
//         className="mb-16 flex justify-center items-center m-4"
//         id="consultas"
//       >
//         <h2 className="text-6xl text-center font-serif text-slate-400 mt-20">
//           Hace tu <span className="text-amber-100">Consulta</span>
//         </h2>
//       </figure>

//       <section className="flex flex-col justify-center items-center border border-[var(--button-dark)] py-10 p-0 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px] lg:w-[700px] mb-0 sombra-inactiva">
//         <form action="/my-handling-form-page" method="post">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//             <div className="cols-2 lg:col-span-1 flex flex-col w-[280px] lg:w-auto my-2">
//               <label
//                 className="col-span-1 text-sm mb-1 text-amber-100 font-extralight"
//                 htmlFor="name"
//               >
//                 Nombre:
//               </label>
//               <input
//                 className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
//                 type="text"
//                 id="name"
//                 name="user_name"
//               />
//             </div>
//             <div className="col-span-1 flex flex-col my-2">
//               <label
//                 className="text-sm mb-1 text-amber-100 font-extralight"
//                 htmlFor="mail"
//               >
//                 Correo:
//               </label>
//               <input
//                 className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
//                 type="email"
//                 id="mail"
//                 name="user_email"
//               />
//             </div>
//           </div>
//           <div className="flex flex-col my-2">
//             <label
//               className="text-sm mb-1 text-amber-100 font-extralight"
//               htmlFor="msg"
//             >
//               Mensaje:
//             </label>
//             <textarea
//               className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none mb-10"
//               id="msg"
//               name="user_message"
//               rows="6"
//             ></textarea>
//           </div>
//         </form>
//         <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] mt-4 px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]">
//           Enviar
//         </button>
//       </section>
//     </>
//   );
// };

// export default Consultas;

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
      setMessage("Se ha enviado tu correo satisfactoriamente");
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
      <section className="flex flex-col justify-center items-center border border-[var(--button-dark)]  p-0 lg:p-1 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px] lg:w-[700px] mb-0 ">
        <form
          action="https://formspree.io/f/xjvnorgy"
          method="POST"
          onSubmit={handleSubmit}
          className="relative max-w-md mx-auto my-8"
        >
          <figure
            className="mb-16 flex justify-center items-center m-4"
            id="consultas"
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
              name="name"
              className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
              required
            />
          </div>

          <div className="mb-4 flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:pr-2">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="email"
              >
                Correo Electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
                required
              />
            </div>

            <div className="w-full lg:w-1/2 lg:pl-2">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="phone"
              >
                Teléfono:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="text-sm mb-1 text-amber-100 font-extralight"
              htmlFor="message"
            >
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-[var(--button-dark)] rounded-sm bg-transparent backdrop-blur-lg p-1 text-[var(--font-light)] font-extralight focus:outline-none resize-none"
              rows="10"
              maxLength="300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex justify-center items-end bg-amber-200/90 hover:bg-amber-200 px-8 py-4 rounded-full sombra-light-amber border border-slate-600/40 text-slate-800 hover:text-[#171c21] ml-10"
          >
            Enviar
          </button>

          {showMessage && (
            <p className="absolute border border-gray-600 rounded p-4 top-0 bg-green-400/40 backdrop-blur-2xl">
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
