import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="grid grid-cols-6 grid-rows-3 h-screen justify-center align-middle">
        <figure className="col-span-2 row-span-3 flex flex-col justify-end items-center mb-10 px-4">
          <Image
            src="/logo.svg"
            alt="Picture of the author"
            width={80}
            height={100}
          />
          <h1 className="text-4xl text-amber-100 p-5">Concepto Hexágono</h1>
          <p className="w-[300px] text-[var(--font-light)]">
            En un mundo donde la presencia digital es la nueva vitrina, tu
            negocio o proyecto merece destacar. Desde dispositivos móviles
            hasta. 2020-2024
          </p>
        </figure>
        <section className="col-span-1 row-span-3 flex flex-col justify-center items-center mb-10">
          <ul className="text-[var(--font-light)]">
            <h1 className="text-2xl text-amber-100 mb-5 mt-32">Navegacion</h1>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </section>
        <section className="col-span-1 row-span-3 flex flex-col justify-center items-center mb-10">
          <ul className="text-[var(--font-light)]">
            <h1 className="text-2xl text-amber-100 mb-5 mt-32">Informacion</h1>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </section>
        <section className="col-span-1 row-span-3 flex flex-col justify-center items-center mb-10">
          <ul className="text-[var(--font-light)]">
            <h1 className="text-2xl text-amber-100 mb-5 mt-32">Compañia</h1>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </section>
        <section className="col-span-1 row-span-3 flex flex-col justify-center items-center mb-10">
          <ul className="text-[var(--font-light)]">
            <h1 className="text-2xl text-amber-100 mb-5 mt-32">Redes</h1>
            <li>item</li>
            <li>item</li>
            <li>item</li>
            <li>item</li>
          </ul>
        </section>
        <section className="col-span-6 flex justify-center items-center my-10 text-[var(--font-light)]">
          <p>página creada con ♥️ por Bird & Fang.</p>
        </section>
      </footer>
    </>
  );
};

export default Footer;
