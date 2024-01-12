import Image from "next/image";

const Modelado3D = () => {
  return (
    <>
      <section className="my-20">
        <figure className="flex flex-col items-start py-10">
          <Image
            src="/titulos/3d.svg"
            alt="Picture of the author"
            width={300}
            height={200}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-left max-w-[820px] pb-10 border border-[var(--button-dark)]  p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-sm">
            <span className="text-amber-50">
              ¡Eleva tu Presentación Visual con Nuestros Servicios de Modelado
              3D!
            </span>{" "}
            En el emocionante mundo visual de hoy, la incorporación de elementos
            tridimensionales puede marcar la diferencia entre destacar y pasar
            desapercibido. En Concepto Hexágono, nos especializamos en ofrecer
            servicios de modelado 3D que llevan la presentación visual de tu
            marca a nuevas alturas.
          </p>
        </figure>
        <div className="flex justify-center my-20">
          <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light border border-[var(--card-light)]">
            Saber Más
          </button>
        </div>
      </section>
    </>
  );
};

export default Modelado3D;
