import { useEffect, useState } from "react";

export const ChangeTheme = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  const handleChangeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    theme === "dark"
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [theme]);

  return (
    <header className='w-90 h-10 col-span-1 sm:col-span-3 dark:text-slate-50  flex justify-end'>
      <button
        type='button'
        onClick={handleChangeTheme}
        className='cursor-pointer text-3xl'
      >
        {theme === "light" ? (
          <i className='ri-moon-clear-line'></i>
        ) : (
          <i className='ri-sun-line'></i>
        )}
      </button>
    </header>
  );
};
