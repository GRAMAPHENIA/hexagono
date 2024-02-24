const Header = () => {
  return (
    <>
      <section className="relative mt-44 lg:mt-0">
        <h1 className="mx-auto text-8xl font-serif text-amber-100 ml-40 tracking-tight leading-[80px]">
          <span className="text-[var(--button-pres)]">diseño</span>
          <br />
          web
          <br />
          <span className="text-gray-400">3D</span>
        </h1>
      </section>
      <p className="text-xl font-extralight col-span-5 sm:ml-52 sm:w-80 text-[--font-light] text-amber-100">
        <span className="text-gray-400">Concepto</span> ||{" "}
        <span className="text-gray-400">Hexágono</span>
      </p>
    </>
  );
};

export default Header;
