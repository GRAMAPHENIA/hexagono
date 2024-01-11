const Cards = () => {
  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-3 justify-center items-center gap-10 lg:gap-0 mt-10">
        <figure className="flex justify-center bg-[#384559] w-[204px] h-[309px] rounded-lg mx-auto lg:mx-64 col-span-3 lg:col-span-1">
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
        </figure>
        <figure className="flex justify-center bg-[#46556B] w-[240px] h-[364px] rounded-lg mx-auto  col-span-3 lg:col-span-1">
          <div className="h-[96px] w-[96px] bg-[var(--hexagonos)] m-6 rounded-full"></div>
        </figure>
        <figure className="flex justify-center bg-[#384559] w-[204px] h-[309px] rounded-lg mx-auto lg:-mx-8 col-span-3 lg:col-span-1">
          <div className="h-[96px] w-[96px] bg-[var(--gradient-end)] m-6 rounded-full"></div>
        </figure>
      </section>
    </>
  );
};

export default Cards;
