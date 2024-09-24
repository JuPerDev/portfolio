import picPerfil from "/img/foto_perfil.jpeg";
import TypeIt from "typeit-react";

export const Banner = () => {
  return (
    <section className='flex flex-col md:flex-row-reverse sm:col-span-3 items-center gap-8 justify-between mb-10'>
      <img
        src={picPerfil}
        alt='Fografia de perfil de Juan Pérez'
        className='rounded-full w-64 h-64 object-cover'
      />
      <div className='flex flex-col justify-center md:items-start items-center'>
        <h2 className='text-center text-4xl font-extrabold text-neutral-700 dark:text-slate-50 mb-2 w-[338px]'>
          Hola,
          <TypeIt className='text-rose-500'> soy JuperDev </TypeIt>
        </h2>
        <p>Desarrollador Front-End</p>
        <div className='flex gap-2'>
          <button type='button' className='text-3xl'>
            <a
              href='https://www.linkedin.com/in/juan-p%C3%A9rez-p%C3%A9rez-3a9230252/'
              target='_blank'
            >
              <i className='ri-linkedin-box-line cursor-pointer'></i>
            </a>
          </button>
          <button type='button' className='text-3xl'>
            <a href='https://github.com/JuPerDev' target='_blank'>
              <i className='ri-github-fill'></i>
            </a>
          </button>
          <button type='button' className='text-3xl'>
            <a
              href='/curriculum_vitae_Juan_Enrique_Pérez.pdf'
              download='curriculum_vitae_Juan_Enrique_Pérez.pdf'
            ></a>
            <i className='ri-file-download-line'></i>
          </button>
        </div>
      </div>
    </section>
  );
};
