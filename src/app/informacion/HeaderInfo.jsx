import Image from "next/image";

const HeaderInfo = () => {
  return (
    <>
      <section className="relative mt-44 ml-8 lg:mt-0">
        <h1 className="mx-auto text-8xl font-serif text-amber-100 ml-40 tracking-tight leading-[80px]">
          <span className="text-[var(--button-pres)]">In</span>
          <br />
          forma
          <br />
          <span className="text-gray-400">ción</span>
        </h1>
      </section>
      <p className="text-sm top-[22px] left-[22px] lg:text-xl lg:top-[-30px] lg:left-[25px] font-extralight col-span-5 sm:ml-52 sm:w-80 text-[--font-light] text-amber-100">
        <span className="text-gray-400">Concepto</span> || <span className="text-gray-400">Hexágono</span>
      </p>
    </>
  );
};

export default HeaderInfo;
