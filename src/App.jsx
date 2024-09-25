import { AboutMe } from "./assets/components/AboutMe";
import { Banner } from "./assets/components/Banner";
import { Footer } from "./assets/components/Footer";
import { NavBar } from "./assets/components/NavBar";
import { Projects } from "./assets/components/Projects";
import { Skills } from "./assets/components/Skills";
import { motion, useScroll } from "framer-motion";

export const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className='bg-rose-500 fixed left origin-left h-1 top-0 left-0 right-0 z-10'
      />
      <div className='flex flex-col justify-center items-center gap-8 md:py-0 sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] md:grid-cols-3'>
        <Banner />
        <AboutMe />
        <Skills />
        <Projects />
        <Footer />
      </div>
      <NavBar />
    </>
  );
};
