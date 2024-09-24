import { Icon } from "@iconify/react";
export const Projects = () => {
  return (
    <section className='sm:col-span-3 mb-10'>
      <h2 className=' text-4xl font-extrabold mb-8'>
        Proyectos<span className='text-rose-500'> Realizados</span>
      </h2>
      <a href='https://www.pascalinapapeleria.cl/' target='_blank'>
        <div className='bg-slate-800 rounded-2xl p-4 w-[250px] h-[320px] flex flex-col text-neutral-50 gap-2 justify-center items-center'>
          <h3>Pascalina Papelería</h3>
          <img
            src='/img/pascalinapapeleria.png'
            alt='imagen proyecto web pascalina papelería.'
            className='w-[200px] rounded-2xl'
          />
          <h4>Tecnología Utilizadas</h4>
          <ul className='flex gap-4'>
            <li>
              <Icon icon='skill-icons:wordpress' className='w-8 h-8' />
            </li>
            <li>
              <Icon icon='devicon:woocommerce' className='w-8 h-8' />
            </li>
          </ul>
        </div>
      </a>
    </section>
  );
};
