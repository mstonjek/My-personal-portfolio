// useDarkMode.js
import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setIsAutoMode(false); // When manually toggling, switch to manual mode
  };

  const toggleAutoMode = () => {
    setIsAutoMode((prev) => !prev);
    // When toggling auto mode, update isDarkMode based on system preference
    updateDarkMode();
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
      // When switching to auto mode, update isDarkMode based on system preference
      updateDarkMode();
    }
  };

  const updateDarkMode = () => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
      .matches;
    setIsDarkMode(prefersDarkMode);
  };

  useEffect(() => {
    // Check the system's dark mode preference when the component mounts
    updateDarkMode();

    // Listen for changes in the color scheme preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDarkModeChange = (e) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handleDarkModeChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleDarkModeChange);
    };
  }, []);

  useEffect(() => {
    // Apply dark mode class to root element
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);



  return {
    isDarkMode,
    isAutoMode,
    toggleDarkMode,
    toggleAutoMode,
    changeMode,
  };
};

export default useDarkMode;
