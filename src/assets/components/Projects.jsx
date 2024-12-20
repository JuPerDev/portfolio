import { ProjectCard } from "./ProjectCard/ProjectCard";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LangContext.jsx";

export const Projects = () => {
  const { language } = useLanguage();
  return (
    <section
      id='projects'
      className='section_port sm:col-span-3 h-screen pt-4 sm:pt-0'
    >
      <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
        <h2 className='text-center font-light text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
          {language === "es" ? (
            <span className='text-center'>
              Proyectos
              <br />
              <span className='text-rose-500'>realizados</span>
            </span>
          ) : (
            <span>
              Proj<span className='text-rose-500'>ects</span>
            </span>
          )}
        </h2>
        <motion.div className='scroll_color overflow-y-auto xl:overflow-hidden w-[320px] sm:w-full mb-2 flex flex-wrap justify-around gap-1 gap-y-6 scroll pb-20'>
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />

          <ProjectCard
            url='https://juperdev.github.io/weatherApp/'
            title='Weather App'
            img='weather_app.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["devicon:react", "devicon:tailwindcss"]}
          />
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />
        </motion.div>
      </div>
    </section>
  );
};
