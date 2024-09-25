import { ProjectCard } from "./ProjectCard/ProjectCard";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <section id='projects' className='sm:col-span-3 h-screen pt-4 sm:pt-0'>
      <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
        <h2 className='text-center font-extralight text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
          Proyectos<span className='text-rose-500'> Realizados</span>
        </h2>
        <motion.div className='scroll_color overflow-y-auto xl:overflow-hidden w-full mb-2 flex flex-wrap justify-around gap-1 gap-y-6 scroll'>
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
          />
          <ProjectCard
            url='https://www.pascalinapapeleria.cl/'
            title='Pascalina Papelería'
            img='pascalinapapeleria.png'
            description='imagen proyecto web pascalina papelería.'
            tecnologies={["skill-icons:wordpress", "devicon:woocommerce"]}
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
