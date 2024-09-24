import { AboutMe } from "./assets/components/AboutMe";
import { Banner } from "./assets/components/Banner";
import { ChangeTheme } from "./assets/components/ChangeTheme";
import { Projects } from "./assets/components/Projects";
import { Skills } from "./assets/components/Skills";

export const App = () => {
  return (
    <div className='sm:grid sm:grid-cols-3 gap-4 p-4 '>
      <ChangeTheme />
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};
