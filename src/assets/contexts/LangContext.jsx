import React, { createContext, useState, useContext } from "react";

// Se define el contexto
const LanguageContext = createContext();

// Custom hook que se usa para acceder al contexto
export const useLanguage = () => useContext(LanguageContext);

// Provider que se usa para proveer el contexto
export const LanguageProvider = ({ children }) => {
  // useState que guarda el idioma seleccionado, defecto es español
  const [language, setLanguage] = useState("es");
  // Función que se usa para cambiar el idioma
  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
