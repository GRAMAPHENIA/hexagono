import Image from "next/image";

const HeaderInfo = () => {
  return (
    <>
      <section className="relative mt-44 lg:mt-0">
        <h1 className="mx-auto text-7xl font-serif text-amber-100 ml-10 lg:ml-40 tracking-tight leading-[80px]">
          <span className="text-[var(--button-pres)]">sobre</span>
          <br />
          nosotros,
          <br />
          <span className="text-gray-400">hexágono</span>
        </h1>
      </section>
      <p className="text-xl font-extralight col-span-5 mt-1 ml-10  sm:ml-52 sm:w-80 text-[--font-light] text-amber-100">
        <span className="text-gray-400 ">Concepto</span> || <span className="text-gray-400">Hexágono</span>
      </p>
    </>
  );
};

export default HeaderInfo;
