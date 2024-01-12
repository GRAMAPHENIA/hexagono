import Image from "next/image";

const Grafico = () => {
  return (
    <>
      <section className="my-20">
        <figure className="flex flex-col items-end py-10">
          <Image
            src="/titulos/grafico.svg"
            alt="Imagen para la  sección que destaca el diseño gráfico"
            width={300}
            height={200}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-center max-w-[920px] pb-10 border border-[var(--button-dark)]  p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </figure>
        <div className="flex justify-center my-20">
          <button className="col-span-5 flex justify-center items-center text-[var(--font-light)] bg-[var(--gradient-end)] px-8 py-4 rounded-full sombra-light">
            Saber Más
          </button>
        </div>
      </section>
    </>
  );
};

export default Grafico;
