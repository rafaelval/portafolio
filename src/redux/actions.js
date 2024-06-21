import { EN, ES, MENUTRIGGER } from "./constants";

export const setLanguage = (lang) => {
  return (dispatch) => {
    if (lang === "es") {
      dispatch({
        type: ES,
      });
    } else {
      dispatch({
        type: EN,
      });
    }
  };
};

export const handleMenu = (bool) => {
  return (dispatch) => {
    dispatch({
      type: MENUTRIGGER,
      payload: bool,
    });
  };
};
