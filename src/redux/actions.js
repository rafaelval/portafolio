const ES = "ES"
const EN = "EN"

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