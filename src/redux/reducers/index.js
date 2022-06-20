import {combineReducers} from "redux";
import usersChangeReducer from "./usersChangeReducer";
import usersHistoryReducer from './usersHistoryReducer';

const allReducers = combineReducers({
    usersChangeReducer: usersChangeReducer,
    usersHistoryReducer: usersHistoryReducer,
  });

export default allReducers;
