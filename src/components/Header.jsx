import React from "react";

const Header = () => {
  return (
    <>
      <h1 className="flex justify-start col-span-6 scroll-m-20 text-4xl font-extrabold -tracking-widest lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-via)] to-[var(--gradient-end)] mt-16 ml-10 sm:ml-48">
        Desarrollo web,
        <br />
        ilustraciones, <br />
        modelado 3D
      </h1>
      <p className="col-span-5 mt-6 ml-10 sm:ml-48 sm:w-80 text-[#93A0B4] mb-20">
        Creamos marcas, elaboramos la identidad para tu empresa
        <span className="text-amber-200">.</span>
      </p>
    </>
  );
};

export default Header;
