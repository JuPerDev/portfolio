import React from "react";

export const AboutMe = () => {
  return (
    <section
      id='about_me'
      className='overflow-hidden sm:col-span-3 flex flex-col justify-center items-center mb-10 h-screen px-6'
    >
      <article>
        <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10'>
          Sobre <span className='text-rose-500'>Mí</span>
        </h2>
        <p className='font-thin md:text-2xl mb-6'>
          Mi nombre es Juan Enrique Pérez, soy un apasionado de la tecnología,
          especialmente del desarrollo FrontEnd.
        </p>
        <p className='font-thin md:text-2xl mb-6'>
          A pesar de contar con estudios formales en informática, mi trayectoria
          en la programación ha sido mayormente autodidacta, lo que me ha
          permitido desarrollar una rápida adaptabilidad a nuevas herramientas y
          tecnologías.
        </p>
        <p className='font-thin md:text-2xl mb-6'>
          He creado sitios web utilizando WordPress para pequeñas empresas
          locales, lo que me ha dado experiencia directa en la implementación de
          soluciones web prácticas y funcionales.
        </p>
      </article>
    </section>
  );
};
