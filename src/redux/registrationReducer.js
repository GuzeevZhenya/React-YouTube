const initialState = {
  login: "shyst",
  password: "123",
};

export const registationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_USERDATE":
      if (
        state.login === action.value.email &&
        state.password === action.value.password
      ) {
      
        return {
          ...state,
          exces: true,
        };
      } else {
        alert("Неправильно");
      }

    default:
      return state;
  }
};
