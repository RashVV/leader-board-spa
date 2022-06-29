import { FETCHED_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED, FETCH_NEW_USERS, PAGINATE_USERS } from '../actionType';

const initialState = {
    participants: [],
    currentArr: 0,
    isNextStep: false,
    leaders: [],
    leadersCount: 4,
    load: true,
    error: null,
};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCHED_USERS:
        state.participants[state.currentArr] = action.payload
        return {
          ...state,
          load: false,
          error: null
        };

      case FETCH_NEW_USERS:
        state.participants.push(action.payload);
        return {
          ...state,
          load: false,
          isNextStep: (state.participants.length - state.currentArr) -1 <= 0,
          currentArr: (state.participants.length - 1),
          error: null
        };

      case FETCH_FAILED:
        return {
          ...state,
          error: true
        };

      case ADDED_NEW_USER:
        state.participants[state.currentArr].push(action.payload);
        state.participants[state.currentArr].sort((a, b) => b?.score - a?.score);
        return {
          ...state,
          participants: state.participants,
          currentArr: action.payload.currentArr,
          load: false
        };

      case EDITED_USER_SCORE:
        state.participants[state.currentArr][action.payload.index] = {'name': action.payload.name, 'score': +action.payload.score};
        state.participants[state.currentArr].sort((a, b) => b?.score - a?.score);
        return {
          ...state
        };

      case PAGINATE_USERS:
        return {
          ...state, currentArr: action.payload,
          isNextStep: (state.participants.length - state.currentArr) -1 < 0.1,
        };

      default:
        return state;
    }
}

export default usersHistoryReducer;
