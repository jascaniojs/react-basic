const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case 'REQUEST_ANY':
      return {
        ...state,
        requested: true,
      };
    default:
      return state;
  }
};

export default reducer;
