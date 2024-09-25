import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section
      id='projects'
      className='h-full pt-4 m:pt-0 sm:col-span-3 flex flex-col justify-center items-center mb-10 px-6'
    >
      <h2 className=' text-center font-extralight md:text-left text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10 '>
        Proyectos<span className='text-rose-500'> Realizados</span>
      </h2>
      <div className='flex flex-wrap justify-around gap-1 gap-y-6'>
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
      </div>
    </section>
  );
};
