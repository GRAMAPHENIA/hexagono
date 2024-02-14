import Navbar from "@/components/Navbar";
import Informacion from "@/components/Informacion";

export const metadata = {
  title: "INFORMACION",
  description: "Generated by Bird & Fang",
};

const page = () => {
  return (
    <>
      <Navbar />
      <Informacion />
    </>
  );
};

export default page;