const initialState = {
  videos: [],
  searchFilm: "",
  formDate: [],
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case "SEARCH_VIDEO":
      return {
        ...state,
        searchFilm: action.value,
      };
    case "ADD_VIDEO":
      console.log(action.value)
      return {
        ...state,
        videos: action.value,
      };
    case "SET_DATA":
      console.log(action.value)
      return {
        ...state,
        formDate:[...state.formDate, action.value],
      };
    default:
      return state;
  }
};
