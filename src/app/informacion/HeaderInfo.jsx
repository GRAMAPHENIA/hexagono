import Image from "next/image";

const HeaderInfo = () => {
  return (
    <>
      <section className="relative mt-20 lg:mt-10">
        <p className="text-sm lg:absolute lg:text-xl lg:top-[10px] lg:left-[25px] font-extralight uppercase col-span-5 sm:ml-48 sm:w-80 text-[--font-light] text-amber-100">
          concepto hexágono
        </p>
        <h1 className="flex lg:justify-start col-span-6 text-5xl font-extrabold lg:relative lg:-tracking-[.5rem] lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] ml-3 sm:ml-[212px] lg:leading-[100px] pt-8 uppercase">
          Información
          <br />
        </h1>
        <p className="font-extralight col-span-5 sm:ml-[212px] text-[--font-light] mb-20 leading-[15px]">
          Datos<span className="text-rose-300">.</span>
        </p>
      </section>
    </>
  );
};

export default HeaderInfo;
