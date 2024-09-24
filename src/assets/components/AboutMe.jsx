import React from "react";

export const AboutMe = () => {
  return (
    <section className='sm:col-span-3 flex flex-col justify-center items-center mb-10'>
      <article className='font-light'>
        <h2 className='inline-block mb-4 text-4xl font-extrabold'>
          Sobre <span className='text-rose-500'>Mí</span>
        </h2>
        <p>
          Mi nombre es Juan Enrique Pérez, soy un apasionado de la tecnología,
          especialmente del desarrollo FrontEnd.
        </p>
        <p>
          A pesar de contar con estudios formales en informática, mi trayectoria
          en la programación ha sido mayormente autodidacta, lo que me ha
          permitido desarrollar una rápida adaptabilidad a nuevas herramientas y
          tecnologías.
        </p>
        <p>
          He creado sitios web utilizando WordPress para pequeñas empresas
          locales, lo que me ha dado experiencia directa en la implementación de
          soluciones web prácticas y funcionales.
        </p>
      </article>
    </section>
  );
};
