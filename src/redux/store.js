import { createStore, combineReducers } from "redux";
import { videoReducer } from "./videoReducer";
import { registationReducer } from "./registrationReducer";

const reducers = combineReducers({ videoReducer, registationReducer });

export const store = createStore(reducers);
