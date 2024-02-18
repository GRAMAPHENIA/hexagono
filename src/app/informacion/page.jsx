import Navbar from "@/components/Navbar";
import Informacion from "@/components/Informacion";
import HeaderInfo from "@/app/informacion/HeaderInfo";
import Consultas from "@/components/Consultas.jsx";
import Footer from "@/components/Footer.jsx";

export const metadata = {
  title: "INFORMACION",
  description: "Generated by Bird & Fang",
};

const page = () => {
  return (
    <>
      <section className="mx-auto max-w-screen-xl">
        <Navbar />
        <HeaderInfo />
        <Informacion />
        {/* <Consultas /> */}
        <Footer />
      </section>
    </>
  );
};

export default page;
