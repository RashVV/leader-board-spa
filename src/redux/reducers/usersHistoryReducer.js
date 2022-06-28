import { FETCH_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED, FETCH_NEW_USERS, PAGINATE_USERS } from '../actionType';

const initialState = {
    participants: [],
    currentArr: 0,
    isNextStep: true,
    leaders: [],
    leadersCount: 4,
    load: true,
    error: null,
};

const getMaxScore = (data, count) => {

  var data = [],
    top3 = data
        .slice()
        .sort(function (a, b) { return b.score - a.score; })
        .slice(0, 4);

        

}

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

      case FETCH_USERS:
        state.participants[0] = action.payload
        return {
          ...state,
          load: false,
          error: null
        }

        case FETCH_NEW_USERS:
          state.participants.push(action.payload);
          return {
            ...state,
            load: false,
            isNextStep: (state.participants.length - state.currentArr) -1 < 0,
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
        const { name, score, index } = action.payload
        state.participants[index] = { name, score };
        state.participants.sort((a, b) => b?.score - a?.score);
           return {
            ...state
          }
          case PAGINATE_USERS:
        return {...state, currentArr: action.payload, isNextStep: (state.participants.length - state.currentArr) -1 > 0, }
      default:
        return state;
    }
}



export default usersHistoryReducer;
