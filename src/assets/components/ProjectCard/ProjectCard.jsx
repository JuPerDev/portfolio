import { Icon } from "@iconify/react";
export const ProjectCard = ({ url, title, img, description, tecnologies }) => {
  return (
    <a href={url} target='_blank'>
      <div className='bg-neutral-700 rounded-2xl p-4 w-[300px] h-[350px] flex flex-col text-neutral-50 gap-2 justify-center items-center'>
        <h3 className='font-normal text-2xl mb-3'>{title}</h3>
        <img
          src={`/img/${img}`}
          alt={description}
          className='w-[200px] rounded-2xl'
        />
        <h4>Tecnología Utilizadas</h4>
        <ul className='flex gap-4 bg-neutral-300/15 p-2 rounded-full'>
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
