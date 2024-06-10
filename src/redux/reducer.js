const ES= "ES"
const EN= "EN"

const initialState = {
  lang: "es",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ES:
      return { ...state, lang: "es" };
    case EN:
      return { ...state, lang: "en" };
    default:
      return state;
  }
};

export default reducer