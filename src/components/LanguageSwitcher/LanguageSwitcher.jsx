import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/actions";
import es from "../../images/es.png";
import en from "../../images/en.png";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang);

  const toggleLanguage = () => {
    if (lang === "es") {
      dispatch(setLanguage("en"));
    } else {
      dispatch(setLanguage("es"));
    }
  };

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

export default LanguageSwitcher;
