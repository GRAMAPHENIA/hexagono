import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <nav className="col-span-6 p-12">
        <ul className="flex justify-between">
          <li className="">
            <Image
              src="/logo.svg"
              alt="Picture of the author"
              width={45}
              height={45}
            />
          </li>
          <li className="space-x-4 flex flex-row align-middle">
            <button className="text-[var(--button-dark)] hidden lg:block bg-[var(--font-semi-light)] px-4 py-2 rounded-full sombra">
              presupuestar
            </button>
            <button className="font-light hidden lg:block bg-[var(--card-dark)] text-[var(--font-light)] px-4 py-2 rounded-full sombra">
              contacto
            </button>
            <button className="bg-[var(--card-dark)] text-[var(--font-semi-light)] text-3xl h-12 w-12 rounded-full sombra">
              ≋
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
