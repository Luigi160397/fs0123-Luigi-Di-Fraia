const initialState = {
  meteo: {
    content: null
  },
  settimana: {
    content: null
  },
  coord: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CURRENT_METEO":
      return {
        ...state,
        meteo: {
          ...state.meteo,
          content: action.payload
        }
      };
    case "METEO_SETTIMANA":
      return {
        ...state,
        settimana: {
          ...state.settimana,
          content: action.payload
        }
      };
    case "LAT_LON":
      return {
        ...state,
        coord: {
          ...state.coord,
          content: action.payload
        }
      };

    default:
      return state;
  }
};

export default mainReducer;
