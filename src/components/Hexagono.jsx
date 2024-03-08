import React from "react";
import Image from "next/image";

const Hexagono = () => {
  return (
    <>
      <section className="mt-28 w-auto bg-gray-800/20 backdrop-blur-lg p-4 lg:p-32 rounded-lg gap-3 flex justify-center shadow-md flex-col lg:mt-[400px] mb-10 border border-slate-700 m-2 lg:m-8">
        <figure>
          <Image
            className="m-auto"
            src="/logo.svg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <h2 className="my-10 text-center text-7xl font-serif text-amber-100 tracking-tight leading-[80px]">
            CONCEPTO HEXAGONO
          </h2>
          <p className="lg:text-xl text-left font-extralight text-pretty px-32">
            Bienvenidos a <span className="text-amber-100">Hexágono</span>,
            donde la imaginación cobra vida a través del diseño enfocado en
            ilustraciones, desarrollo web y diseño 3D. Nos dedicamos
            apasionadamente a ofrecer soluciones visuales innovadoras que
            cautivan y inspiran. <br />
            <br /> En <span className="text-amber-100">Hexágono</span>,
            fusionamos arte y tecnología para ofrecer una amplia gama de
            servicios creativos. Desde ilustraciones vibrantes que cuentan
            historias hasta modelos 3D que traspasan los límites de lo posible,
            nuestra misión es superar las expectativas de nuestros clientes en
            cada proyecto. <br />
            <br /> Destacamos en el diseño web, donde la excelencia se encuentra
            en el corazón de nuestro trabajo. Utilizando las últimas tecnologías
            y herramientas como HTML, CSS, JavaScript, React, Next.js y Tailwind
            CSS, creamos experiencias web dinámicas y receptivas que no solo
            cautivan visualmente, sino que también funcionan de manera
            excepcional en todos los dispositivos. <br />
            <br /> Nuestro compromiso con la calidad y la atención al detalle
            nos ha llevado a ser líderes en la industria del diseño. Ya sea que
            necesite ilustraciones que den vida a su marca, modelos 3D que
            agreguen profundidad a su proyecto o un sitio web que destaque entre
            la multitud, en <span className="text-amber-100">
              Hexágono
            </span>{" "}
            tenemos la experiencia y la pasión necesarias para hacerlo realidad.
            <br />
            <br />
            Únase a nosotros en este viaje creativo y descubra cómo podemos
            llevar su visión más allá de lo ordinario. En{" "}
            <span className="text-amber-100">Hexágono</span>, transformamos
            ideas en realidad visual.
          </p>
        </figure>
      </section>
    </>
  );
};

export default Hexagono;
