import { FETCH_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED } from '../actionType';

const initialState = {
    participants: [],
    load: true,
    error: null,
};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCH_USERS:
      return {
          ...state,
          participants: [...state.participants, action.payload],
          load: false,
          error: null
        }

      case FETCH_FAILED:
        return {...state, error: true}

      case ADDED_NEW_USER:
        state.participants.push(action.payload);
        state.participants.sort((a, b) => b?.score - a?.score);
          return {
            ...state,
            participants: state.participants,
            load: false
          }

      case EDITED_USER_SCORE:
        state.participants[0][action.payload.index] = {'name': action.payload.name, 'score': +action.payload.score};
        state.participants[0].sort((a, b) => b?.score - a?.score);
           return {
            ...state,
          }
      default:
        return state;
    }
}

export default usersHistoryReducer;
