import { FETCH_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED } from '../actionType';

const initialState = {
    participants: [],
    currentDay: 0,
    load: true,
    error: null,
};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCH_USERS:
      return {
          ...state,
          participants: [...state.participants, action.payload],
          //currentDay:
          load: false,
          error: null
        }

      case FETCH_FAILED:
        return {...state, error: true}

      case ADDED_NEW_USER:
        state.participants[0].push(action.payload);
        state.participants[0].sort((a, b) => b?.score - a?.score);
          return {
            ...state,
            participants: [state.participants[0], action.payload],
            load: false
          }

      case EDITED_USER_SCORE:
        debugger
        state.participants[0].filter(e => e !== [action.payload.name]) ;
        //state.participants[0].without([state.participants[0]], [action.payload.name])
        debugger
        // state.participants[0][action.payload.score] = action.payload.score;

        state.participants[0].push(action.payload);
        state.participants[0].sort((a, b) => b?.score - a?.score);
           return {
            ...state,
            participants: [state.participants[0], action.payload],
            load: false
          }
      default:
        return state;
    }
}

export default usersHistoryReducer;
