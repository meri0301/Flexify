import {combineReducers} from 'redux';

import usersReducer from "./user";
import tokenReducer from "./token";
import historyReducer from "./history";
import reminderReducer from "./reminder";


const AppReducer = combineReducers({
    usersReducer,
    tokenReducer,
    historyReducer,
    reminderReducer,
})

export default AppReducer;