import Image from "next/image";

const Grafico = () => {
  return (
    <>
      <figure className="flex flex-col items-end py-10">
        <Image
          src="/titulos/grafico.svg"
          alt="Imagen para la  sección que destaca el diseño gráfico"
          width={150}
          height={200}
          className="py-10"
        />
        <p className="text-[var(--font-light)] text-xl font-extralight text-end max-w-[620px] pb-10">
          En un mundo donde la presencia digital es la nueva vitrina, tu negocio
          o proyecto merece destacar. Desde dispositivos móviles hasta
          computadoras de escritorio, cada pantalla es una oportunidad de
          conexión. Asegurar la visibilidad de tu empresa en este universo
          virtual es fundamental para alcanzar a tu audiencia en cualquier
          momento y lugar.
        </p>
      </figure>
    </>
  );
};

export default Grafico;
