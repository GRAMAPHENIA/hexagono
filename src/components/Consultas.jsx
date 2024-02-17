const Consultas = () => {
  return (
    <>
      <figure
        className="mb-16 flex justify-center items-center m-4"
        id="consultas"
      >
        <h2 className="text-6xl text-center font-serif text-slate-400 mt-36">
          Hace tu <span className="text-amber-100">Consulta</span>
        </h2>
      </figure>

      <section className="flex flex-col justify-center items-center border border-[var(--button-dark)] py-10 lg:p-10 rounded-xl bg-[#1011121d] backdrop-blur-sm mx-auto w-[340px] lg:w-[700px] mb-0 sombra-inactiva">
        <form action="/my-handling-form-page" method="post">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col my-2">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="name"
              >
                Nombre:
              </label>
              <input
                className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
                type="text"
                id="name"
                name="user_name"
              />
            </div>
            <div className="flex flex-col my-2">
              <label
                className="text-sm mb-1 text-amber-100 font-extralight"
                htmlFor="mail"
              >
                Correo:
              </label>
              <input
                className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none"
                type="email"
                id="mail"
                name="user_email"
              />
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label
              className="text-sm mb-1 text-amber-100 font-extralight"
              htmlFor="msg"
            >
              Mensaje:
            </label>
            <textarea
              className="border border-[var(--button-dark)] rounded-sm bg-transparent p-1 text-[var(--font-light)] font-extralight focus:outline-none mb-10"
              id="msg"
              name="user_message"
              rows="6"
            ></textarea>
          </div>
        </form>
        <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] mt-4 px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]">
          Enviar
        </button>
      </section>
    </>
  );
};

export default Consultas;
