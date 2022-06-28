import { FETCH_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED, FETCH_NEW_USERS } from '../actionType';

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

      case FETCH_NEW_USERS:
        return {
          ...state,
          participants: [...state.participants, action.payload],
          currentDay: 0,
          load: false,
          error: null
        }

      case ADDED_NEW_USER:
        state.participants[0].push(action.payload);
        state.participants[0].sort((a, b) => b?.score - a?.score);
          return {
            ...state,
            participants: [state.participants[0], action.payload],
            load: false
          }

      case EDITED_USER_SCORE:

        //state.participants[0].filter(e => e.name !== action.payload.name) ;
        state.participants[0].find(x => (x.name === action.payload.name ? { ...x, score: +action.payload.score } : x));
        console.log(action.payload.name)
        console.log(state.participants[0])
        //state.participants[0].without([state.participants[0]], [action.payload.name])

        // state.participants[0][action.payload.score] = action.payload.score;

        //state.participants[0].push(action.payload);
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
