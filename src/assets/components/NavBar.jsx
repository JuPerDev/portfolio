import { useState, useEffect, useRef } from "react";
import { ChangeTheme } from "./ChangeTheme";
import { LanguageSelector } from "./LanguageSelector";

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState("#home");
  const sectionsRef = useRef({});

  useEffect(() => {
    const sections = ["home", "about_me", "skills", "projects", "footer"];

    sections.forEach((section) => {
      sectionsRef.current[section] = document.getElementById(section);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.5 } // Se activa cuando el 50% de la sección es visible
    );

    sections.forEach((section) => {
      if (sectionsRef.current[section]) {
        observer.observe(sectionsRef.current[section]);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (sectionsRef.current[section]) {
          observer.unobserve(sectionsRef.current[section]);
        }
      });
    };
  }, []);

  return (
    <div className='fixed bottom-0 left-0 right-0 mx-auto'>
      <nav>
        <div className='min-w-[340px] max-w-[300px] flex items-center justify-center gap-2 px-4 py-1 rounded-t-3xl bg-slate-500/15 backdrop-blur-sm mx-auto'>
          <a
            href='#home'
            className={`text-3xl p-1 ${
              activeSection === "#home" ? "text-rose-500" : ""
            }`}
          >
            <i className='ri-home-line'></i>
          </a>
          <a
            href='#about_me'
            className={`text-3xl p-1 ${
              activeSection === "#about_me" ? "text-rose-500" : ""
            }`}
          >
            <i className='ri-user-line'></i>
          </a>
          <a
            href='#skills'
            className={`text-3xl p-1 ${
              activeSection === "#skills" ? "text-rose-500" : ""
            }`}
          >
            <i className='ri-file-unknow-line'></i>
          </a>
          <a
            href='#projects'
            className={`text-3xl p-1 ${
              activeSection === "#projects" ? "text-rose-500" : ""
            }`}
          >
            <i className='ri-terminal-box-line'></i>
          </a>
          <a
            href='#footer'
            className={`text-3xl p-1 ${
              activeSection === "#footer" ? "text-rose-500" : ""
            }`}
          >
            <i className='ri-mail-line'></i>
          </a>
          <ChangeTheme />
          <LanguageSelector />
        </div>
      </nav>
    </div>
  );
};
