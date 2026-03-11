import React, { createContext, useState, useCallback } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const [menuOpen, setMenuOpen] = useState(true);

  const changeLang = useCallback((newLang) => {
    setLang(newLang);
  }, []);

  const toggleMenu = useCallback((isOpen) => {
    setMenuOpen(isOpen);
  }, []);

  const value = {
    lang,
    changeLang,
    menuOpen,
    toggleMenu,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
