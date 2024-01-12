import Image from "next/image";

import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";
import Cards from "@/components/Cards.jsx";
import Servicios from "@/components/Servicios.jsx";

const Home = () => {
  return (
    <main className="mx-auto max-w-screen-xl">
      <section className="grid grid-cols-6 justify-center items-center">
        <Navbar />
        <Header />
      </section>
      <Cards />
      <Servicios />
    </main>
  );
};

export default Home;
