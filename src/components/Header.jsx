import Image from "next/image";

const Header = () => {
  return (
    <>
      <section
        className="relative mt-48 lg:mt-0"
      >
        <p className="text-sm absolute top-[22px] left-[22px] lg:text-xl lg:top-[10px] lg:left-[25px] font-extralight uppercase col-span-5 sm:ml-48 sm:w-80 text-[--font-light] text-amber-100">
          concepto hexágono
        </p>
        <h1 className="flex justify-start col-span-6 text-7xl font-extrabold lg:relative lg:-tracking-[.5rem] lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] ml-5 sm:ml-[212px] lg:leading-[100px] pt-8 uppercase">
          diseño
          <br />
          web
          <br />
          3D
        </h1>
        <p className="font-extralight col-span-5 ml-4 pl-2 sm:ml-[212px] text-[--font-light] mb-20 leading-[15px]">
          Creamos tu identidad<span className="text-rose-300">.</span>
        </p>

        {/* <Image
        src="/3d/4.png"
        alt="Imagen para la  sección que destaca el diseño gráfico"
        width={250}
        height={200}
        className="absolute top-[260px] right-[410px]"
      /> */}
      </section>
    </>
  );
};

export default Header;
