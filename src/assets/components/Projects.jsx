import { ProjectCard } from "./ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <section className='sm:col-span-3 mb-10'>
      <h2 className=' text-4xl font-extrabold mb-8'>
        Proyectos<span className='text-rose-500'> Realizados</span>
      </h2>
      <div className='flex flex-wrap justify-around gap-2'>
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
