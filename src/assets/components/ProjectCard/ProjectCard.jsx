import { Icon } from "@iconify/react";
export const ProjectCard = ({ url, title, img, description, tecnologies }) => {
  return (
    <a href={url} target='_blank'>
      <div className='bg-slate-800 rounded-2xl p-4 w-[250px] h-[320px] flex flex-col text-neutral-50 gap-2 justify-center items-center'>
        <h3 className='font-bold'>{title}</h3>
        <img
          src={`/img/${img}`}
          alt={description}
          className='w-[200px] rounded-2xl'
        />
        <h4>Tecnología Utilizadas</h4>
        <ul className='flex gap-4'>
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
