import { EN, ES, MENUTRIGGER } from "./constants";

const initialState = {
  lang: "es",
  menuOpen: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ES:
      return { ...state, lang: "es" };
    case EN:
      return { ...state, lang: "en" };
    case MENUTRIGGER:
      return { ...state, menuOpen: action.payload };
    
    default:
      return state;
  }
};

export default reducer;
