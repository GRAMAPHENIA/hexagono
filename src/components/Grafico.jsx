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
          <p className="text-[var(--font-light)] text-xl font-extralight text-right max-w-[820px] pb-10 border border-[var(--button-dark)]  p-10 rounded-xl bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-sm">
            <span className="text-amber-50">
              ¡Impulsa tu Marca con Nuestros Servicios de Diseño Gráfico!
            </span>{" "}
            En el vibrante mundo visual de hoy, la identidad de tu marca es más
            crucial que nunca. En Concepto Hexágono, nos especializamos en
            ofrecer servicios de diseño gráfico que no solo capturan la esencia
            de tu negocio, sino que también crean una conexión visual duradera
            con tu audiencia.
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

export default Grafico;
