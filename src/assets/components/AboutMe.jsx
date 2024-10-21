import React from "react";
import { useLanguage } from "../contexts/LangContext.jsx";

export const AboutMe = () => {
  const { language } = useLanguage();
  const content =
    language === "es" ? (
      <section id='about_me' className='sm:col-span-3 h-screen'>
        <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
          <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10'>
            Sobre <span className='text-rose-500'>Mí</span>
          </h2>
          <article className='scroll_color overflow-auto touch-pan-y'>
            <p className='font-thin md:text-2xl mb-6'>
              Mi nombre es Juan Enrique Pérez, soy un apasionado de la
              tecnología, especialmente del desarrollo FrontEnd.
            </p>
            <p className='font-thin md:text-2xl mb-6'>
              A pesar de contar con estudios formales en informática, mi
              trayectoria en la programación ha sido mayormente autodidacta, lo
              que me ha permitido desarrollar una rápida adaptabilidad a nuevas
              herramientas y tecnologías.
            </p>
            <p className='font-thin md:text-2xl mb-6'>
              He creado sitios web utilizando WordPress para pequeñas empresas
              locales, lo que me ha dado experiencia directa en la
              implementación de soluciones web prácticas y funcionales.
            </p>
          </article>
        </div>
      </section>
    ) : (
      <section id='about_me' className='sm:col-span-3 h-screen'>
        <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
          <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10'>
            About <span className='text-rose-500'>Me</span>
          </h2>
          <article className='scroll_color overflow-auto touch-pan-y'>
            <p className='font-thin md:text-2xl mb-6'>
              My name is Juan Enrique Pérez, and I am passionate about
              technology, especially FrontEnd development.
            </p>
            <p className='font-thin md:text-2xl mb-6'>
              Despite having formal studies in computer science, my programming
              journey has been mostly self-taught, allowing me to quickly adapt
              to new tools and technologies.
            </p>
            <p className='font-thin md:text-2xl mb-6'>
              I have built websites using WordPress for small local businesses,
              giving me direct experience in implementing practical and
              functional web solutions.
            </p>
          </article>
        </div>
      </section>
    );
  return <>{content}</>;
};
