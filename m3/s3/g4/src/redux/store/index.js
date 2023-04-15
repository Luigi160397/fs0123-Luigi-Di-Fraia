import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeReducer from "../reducers/homeReducer";
import albumReducer from "../reducers/albumReducer";
import artistReducer from "../reducers/artistReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  album: albumReducer,
  artist: artistReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
