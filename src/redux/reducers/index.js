import {combineReducers} from "redux";
import usersChangeReducer from "./usersChangeReducer";
import usersHistoryScoreReducer from './usersHistoryScoreReducer';

const allReducers = combineReducers({
    usersChangeReducer: usersChangeReducer,
    usersHistoryScoreReducer: usersHistoryScoreReducer,
  });

export default allReducers;
