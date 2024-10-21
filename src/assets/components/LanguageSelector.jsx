import React from "react";
import { useLanguage } from "../contexts/LangContext.jsx";
import { Icon } from "@iconify/react/dist/iconify.js";

export const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage();
  return (
    <button
      type='button'
      onClick={() => changeLanguage(language === "es" ? "en" : "es")}
      className='cursor-pointer text-3xl pl-2 '
    >
      {language === "es" ? (
        <p className='text-center m-0 font-extralight text-3xl dark:text-white text-black'>
          ES
        </p>
      ) : (
        <p className='text-center m-0 font-extralight text-3xl dark:text-white text-black'>
          EN
        </p>
      )}
    </button>
  );
};
