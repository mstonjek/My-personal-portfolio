// useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleAutoMode = () => {
    setIsAutoMode((prev) => !prev);
  };

  const changeMode = (mode) => {
    if (mode === "dark") {
      setIsDarkMode(true);
      setIsAutoMode(false);
    } else if (mode === "light") {
      setIsDarkMode(false);
      setIsAutoMode(false);
    } else if (mode === "auto") {
      setIsDarkMode(false);
      setIsAutoMode(true);
    }
  };

  useEffect(() => {
    const root = document.documentElement;

   if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode, isAutoMode]);

  return {
    isDarkMode,
    isAutoMode,
    toggleDarkMode,
    toggleAutoMode,
    changeMode,
  };
};

export default useDarkMode;
