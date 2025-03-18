import {createStore} from "redux";

import AppReducers from "./reducers/index.js";

const store = createStore(AppReducers);

export default store;