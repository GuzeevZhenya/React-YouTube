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
      return {
        ...state,
        videos: action.value,
      };
    case "SET_DATA":  
      return {
        ...state,
        formDate:[...state.formDate, action.value],
      };
    case "REMOVE_VIDEO":
      const newVideo = state.formDate.filter((item) => item.id !== action.value);
      console.log(newVideo)
      return {
        ...state,
        formDate: newVideo
      }
    
    case "CHANGE_VALUE":
      console.log(action.value)
      const newFavouriteValue = state.formDate.filter((item) => item.id === action.value.id);
      const newState = state.formDate.map(item => {
        if (item.id === newFavouriteValue[0].id) {
          item = action.value;
        }
        return item;
      })
      console.log(newState)
   
      return {
        ...state,
        formDate:newState
      }
     
      
    default:
      return state;
  }
};
