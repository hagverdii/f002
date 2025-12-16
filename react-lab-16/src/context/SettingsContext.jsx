import {createContext, useContext, useState} from "react";

const SettingsContext = createContext();

const translations = {
  az: {
    home: "Ana Səhifə",
    about: "Haqqımızda",
    title: "Salam!",
    description: "Bu ana səhifədir"
  },
  en: {
    home: "Home",
    about: "About",
    title: "Hello!",
    description: "This is home page"
  }
};

export const SettingsProvider = ({children}) => {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("az");
  
  const toggleTheme = () =>
    setTheme(theme === "dark" ? "light" : "dark");
  
  const changeLanguage = (lng) => setLang(lng);
  
  return (
    <SettingsContext.Provider
      value={{
        theme,
        toggleTheme,
        changeLanguage,
        words: translations[lang]
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
