const initialState = {
  login: 'admin',
  password: 'admin',
  exces: false,
};

export const registationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK_USERDATE':
      if (state.login === action.value.email && state.password === action.value.password) {
        return {
          ...state,
          exces: true,
        };
      } else {
        alert('Неправильно');
      }
    case 'EXIT':
      return {
        ...state,
        exces: action.value,
      };

    default:
      return state;
  }
};
