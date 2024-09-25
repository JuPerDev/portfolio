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
    <button
      type='button'
      onClick={handleChangeTheme}
      className='cursor-pointer text-3xl pl-2 '
    >
      {theme === "light" ? (
        <i className='ri-moon-clear-line'></i>
      ) : (
        <i className='ri-sun-line'></i>
      )}
    </button>
  );
};
