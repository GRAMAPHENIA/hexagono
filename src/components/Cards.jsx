const Cards = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:gap-0 my-10">
        <figure className="flex flex-col justify-center items-center text-center bg-[#384559] w-[204px] h-[309px] rounded-lg mx-auto lg:mx-64 col-span-3 lg:col-span-1 sombra-completa">
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
          <p className="p-4 text-[#93A0B4]">
            Diseño gráfico, logos, isotipos, Branding.
          </p>
          <button className="px-4 py-2 m-4 text-[var(--font-semi-light)] bg-[var(--gradient-end)] rounded-full sombra-card">
            Saber Más
          </button>
        </figure>
        <figure className="flex flex-col justify-center items-center text-center bg-[#55667e] w-[240px] h-[364px] rounded-lg mx-auto  col-span-3 lg:col-span-1 sombra-completa">
          <div className="h-[96px] w-[96px] bg-[var(--hexagonos)] m-6 rounded-full"></div>
          <p className="p-4 text-[#c0c9d7]">
            Desarrollo Web, landing page, programación.
          </p>
          <button className="px-4 py-2 m-4 text-[var(--font-light)] bg-[var(--gradient-end)] rounded-full sombra-card">
            Saber Más
          </button>
        </figure>
        <figure className="flex flex-col justify-center items-center text-center bg-[#384559] w-[204px] h-[309px] rounded-lg mx-auto lg:-mx-8 col-span-3 lg:col-span-1 sombra-completa">
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
          <p className="p-4 text-[#93A0B4]">Modelado 3D, texturas, assets. </p>
          <button className="px-4 py-2 m-4 text-[var(--font-semi-light)] bg-[var(--gradient-end)] rounded-full sombra-card">
            Saber Más
          </button>
        </figure>
      </section>
    </>
  );
};

export default Cards;
