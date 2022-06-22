import {combineReducers} from "redux";
import usersHistoryReducer from './usersHistoryReducer';

const allReducers = combineReducers({
    usersHistoryReducer: usersHistoryReducer,
  });

export default allReducers;
