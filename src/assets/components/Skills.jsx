import { Icon } from "@iconify/react";
export const Skills = () => {
  return (
    <section id='skills' className='sm:col-span-3 h-screen'>
      <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
        <div>
          <h2 className='text-center font-extralight  text-5xl md:text-7xl text-neutral-700 dark:text-slate-50 mb-10'>
            Tecnologías <span className='text-rose-500'>utilizadas</span>
          </h2>
          <ul className='text-7xl flex flex-wrap justify-center gap-4 light:bg-slate-800 p-2 rounded-xl'>
            <li>
              <Icon icon='devicon:html5' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:css3' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:javascript' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:react' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:mysql' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:postgresql' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:git' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='ion:logo-github' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='devicon:tailwindcss' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='skill-icons:bootstrap' className='w-12 h-12' />
            </li>
            <li>
              <Icon icon='skill-icons:wordpress' className='w-12 h-12' />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
