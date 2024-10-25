import { Icon } from "@iconify/react";
import { useLanguage } from "../contexts/LangContext.jsx";
export const Skills = () => {
  const { language } = useLanguage();
  const skills_frontend = [
    "html5",
    "css3",
    "javascript",
    "typescript",
    "react",
    "tailwindcss",
    "wordpress",
    "bootstrap",
    "astro",
  ];
  const skills_backend = ["mysql", "mongodb", "nodejs", "express"];
  const skills_tools = ["git", "github", "postman", "figma"];
  return (
    <section
      id='skills'
      className='section_port sm:col-span-3 h-lvh pb-20 md:pb-0'
    >
      <div className='h-full pb-[60px] flex flex-col justify-center items-center px-6'>
        {language === "es" ? (
          <h2 className='text-center  font-light  text-3xl sm:text-5xl text-neutral-700 dark:text-slate-50 mb-1 md:mb-10 '>
            Tecnologías y Herramientas&nbsp;
            <span className='text-rose-500'>utilizadas</span>
          </h2>
        ) : (
          <h2 className='text-center  font-light  text-3xl sm:text-5xl text-neutral-700 dark:text-slate-50 mb-1 md:mb-10 '>
            Technologies and Tools&nbsp;
            <span className='text-rose-500'>Used</span>
          </h2>
        )}
        <article className='flex justify-center items-center gap-8 py-2 px-4 rounded-xl flex-wrap'>
          <div className='flex flex-col w-[350px] md:w-[250px] h-[170px] md:h-[500px] gap-2 py-2 px-4 rounded-xl ring-2 bg-slate-50/10  ring-slate-500'>
            <h2 className='md:h-[80px] text-2xl text-center mb-2'>
              {language === "es"
                ? "Tecnologías Front-End"
                : "Front-End Technologies"}
            </h2>
            <ul className=' text-7xl flex flex-wrap justify-center items-center gap-4 p-2 rounded-xl'>
              {skills_frontend.map((e, index) => {
                return (
                  <li key={index}>
                    {e === "wordpress" || e === "bootstrap" || e === "astro" ? (
                      <Icon
                        icon={`skill-icons:${e}`}
                        className='md:w-16 md:h-16 w-10 h-10'
                      />
                    ) : (
                      <Icon
                        icon={`devicon:${e}`}
                        className='md:w-16 md:h-16 w-10 h-10'
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex flex-col w-[350px] md:w-[250px] h-[150px] md:h-[500px] gap-2 py-2 px-4 rounded-xl ring-2 bg-slate-50/10  ring-slate-500'>
            <h2 className='md:h-[80px] text-2xl text-center mb-2'>
              {language === "es"
                ? "Tecnologías Back-End"
                : "Back-End Technologies"}
            </h2>
            <ul className=' text-7xl flex flex-wrap justify-center items-center gap-4 p-2 rounded-xl'>
              {skills_backend.map((e, index) => {
                return (
                  <li key={index}>
                    <Icon
                      icon={`devicon:${e}`}
                      className='md:w-16 md:h-16 w-10 h-10'
                    />
                  </li>
                );
              })}
            </ul>
          </div>
          <div className='flex flex-col w-[350px] md:w-[250px] h-[120px] md:h-[500px] gap-2 py-2 px-4 rounded-xl ring-2 bg-slate-50/10  ring-slate-500'>
            <h2 className='md:h-[80px] text-2xl text-center mb-2'>
              {language === "es" ? "Herramientas" : "Tools"}
            </h2>
            <ul className=' text-7xl flex flex-wrap justify-center items-center gap-4 p-2 rounded-xl'>
              {skills_tools.map((e, index) => {
                return (
                  <li key={index}>
                    <Icon
                      icon={`devicon:${e}`}
                      className='md:w-16 md:h-16 w-10 h-10'
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
