const initialState = {
  favourites: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      };
    case "DELETE_FROM_FAVOURITE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((_, i) => i !== action.payload)
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
