import React from "react";

const Header = () => {
  return (
    <>
      <p className="text-sm absolute top-[145px] left-[22px] lg:text-xl lg:top-[155px] lg:left-[128px] font-extralight uppercase col-span-5 sm:ml-48 sm:w-80 text-[--font-light] text-amber-100">
        concepto hehagono
      </p>
      <h1 className="lg:relative flex justify-start col-span-6 text-7xl font-extrabold lg:-tracking-[.5rem] lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] ml-5 sm:ml-48 lg:leading-[100px] pt-8 uppercase">
        diseño
        <br />
        web
        <br />
        3D
      </h1>
      <p className="font-extralight col-span-5 ml-8 pl-2 sm:ml-48 sm:w-80 text-[--font-light] mb-20 lg:leading-[15px] ">
        Creamos marcas, elaboramos la identidad para tu empresa.
      </p>
    </>
  );
};

export default Header;
