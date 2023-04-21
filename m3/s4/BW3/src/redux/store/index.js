import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "../reducers/profileReducer";
import homeReducer from "../reducers/homeReducer";
import jobReducer from "../reducers/jobReducer";
import commentReducer from "../reducers/commentReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import favReducer from "../reducers/favReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["home", "profile", "comment", "job"]
};

const rootReducer = combineReducers({
  profile: profileReducer,
  home: homeReducer,
  job: jobReducer,
  fav: favReducer,
  comment: commentReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
