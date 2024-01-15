const Cards = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-20 lg:gap-0 my-60">
        <figure className="flex flex-col justify-center items-center text-center bg-[#384559] w-[204px] h-[409px] rounded-lg mx-auto lg:mx-64 col-span-3 lg:col-span-1 sombra-completa">
          <h1>Plan basico</h1>
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
          <p className="font-light p-4 text-[var(--font-light)]">
            Diseño gráfico, logos, isotipos, Branding.
          </p>
          <button className="px-4 py-2 m-4 text-[var(--font-semi-light)] bg-[var(--gradient-end)] rounded-full sombra-card-dark">
            Ver más planes
          </button>
        </figure>

        <figure className="flex flex-col justify-between py-8 items-center text-center bg-[#55667e] w-[290px] h-[564px] rounded-lg mx-auto  col-span-3 lg:col-span-1 sombra-completa">
          <h1>Plan basico</h1>
          <div className="h-[96px] w-[96px] bg-[var(--hexagonos)] m-6 rounded-full"></div>
          <p className="font-light p-4 text-[var(--button-light)]">
            Desarrollo Web, landing page, programación.
          </p>
          <button className="px-4 py-2 m-4 text-[var(--font-light)] bg-[var(--gradient-end)] rounded-full sombra-card">
            Ver más planes
          </button>
        </figure>

        <figure className="flex flex-col justify-center items-center text-center bg-[#384559] w-[204px] h-[409px] rounded-lg mx-auto lg:-mx-8 col-span-3 lg:col-span-1 sombra-completa">
          <h1>Plan basico</h1>
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
          <p className="font-light p-4 text-[var(--font-light)]">
            Modelado 3D, texturas, assets.
          </p>
          <button className="px-4 py-2 m-4 text-[var(--font-semi-light)] bg-[var(--gradient-end)] rounded-full sombra-card-dark">
            Ver más planes
          </button>
        </figure>
      </section>
    </>
  );
};

export default Cards;
