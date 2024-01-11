import Image from "next/image";

const Web = () => {
  return (
    <>
      <section className=" px-20">
        <figure className="flex flex-col items-end py-10">
          <Image
            src="/titulos/grafico.svg"
            alt="Picture of the author"
            width={150}
            height={200}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-end max-w-[620px] pb-10">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </figure>
        <figure className="flex flex-col items-center py-10">
          <Image
            src="/titulos/web.svg"
            alt="Picture of the author"
            width={500}
            height={100}
            className="py-20"
          />
          <p className="text-[var(--font-light)] text-3xl font-extralight text-center max-w-[920px] pb-10">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </figure>
        <figure className="flex flex-col items-start py-10">
          <Image
            src="/titulos/3d.svg"
            alt="Picture of the author"
            width={300}
            height={200}
            className="py-10"
          />
          <p className="text-[var(--font-light)] text-xl font-extralight text-start max-w-[620px] pb-10">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles hasta
            computadoras de escritorio, cada pantalla es una oportunidad de
            conexión. Asegurar la visibilidad de tu empresa en este universo
            virtual es fundamental para alcanzar a tu audiencia en cualquier
            momento y lugar.
          </p>
        </figure>
      </section>
    </>
  );
};

export default Web;
