import { Icon } from "@iconify/react";
export const ProjectCard = ({ url, title, img, description, tecnologies }) => {
  return (
    <a href={url} target='_blank'>
      <div className='dark:bg-neutral-700 bg-slate-100 rounded-2xl p-4 w-[300px] h-[350px] flex flex-col text-slate-700 dark:text-neutral-50 gap-2 justify-center items-center'>
        <h3 className='font-extralight text-2xl mb-3'>{title}</h3>
        <img
          src={`/img/${img}`}
          alt={description}
          className='w-[200px] rounded-2xl'
        />
        <h4 className='font-extralight'>Tecnologías Utilizadas</h4>
        <ul className='flex gap-4 font-extralight bg-neutral-300/15 p-2 rounded-full'>
          {tecnologies.map((elem, index) => {
            return (
              <li key={index}>
                <Icon icon={elem} className='w-8 h-8' />
              </li>
            );
          })}
        </ul>
      </div>
    </a>
  );
};
