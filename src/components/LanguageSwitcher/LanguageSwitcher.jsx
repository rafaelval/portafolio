import React, { useContext, memo, useCallback } from "react";
import { AppContext } from "../../context/AppContext";
import es from "../../images/es.png";
import en from "../../images/en.png";

const LanguageSwitcherComponent = () => {
  const { lang, changeLang } = useContext(AppContext);

  const toggleLanguage = useCallback(() => {
    changeLang(lang === "es" ? "en" : "es");
  }, [lang, changeLang]);

  return (
    <div className="absolute z-50 flex items-center justify-center p-4 space-x-4 right-3 top-5">
      <img src={es} alt="es" className="w-8 h-8 " />
      <div
        className="relative flex items-center p-1 bg-gray-300 rounded-full cursor-pointer w-14 h-7"
        onClick={toggleLanguage}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
            lang === "en" ? "translate-x-7" : "translate-x-0"
          }`}
        ></div>
      </div>
      <img src={en} alt="en" className="w-8 h-8 " />
    </div>
  );
};

export default memo(LanguageSwitcherComponent);
