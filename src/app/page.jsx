import Image from "next/image";

import Navbar from "@/components/Navbar.jsx";
import Header from "@/components/Header.jsx";
import Servicios from "@/components/Servicios.jsx";
import Footer from "@/components/Footer.jsx";

const Home = () => {
  return (
    <main className="mx-auto max-w-screen-xl">
      <Navbar />
      <Header />
      <Servicios />
      <Footer />
    </main>
  );
};

export default Home;
