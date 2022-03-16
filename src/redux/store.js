import { createStore, combineReducers } from "redux";
import { videoReducer } from "./videoReducer";
import { registationReducer } from "./registrationReducer";

// const reducers = combineReducers({ videoReducer, registationReducer });

// export const store = createStore(reducers);


export const store = createStore(combineReducers({videoReducer,registationReducer}),
(localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : {})

store.subscribe(() => {
	localStorage['redux-store'] = JSON.stringify(store.getState());
});

console.log(store)
