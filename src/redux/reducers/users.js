import { FETCHED_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED, FETCHED_NEW_USERS, PAGINATED_USERS } from '../actionType';

const initialState = {
    participants: [],
    currentArr: 0,
    isNextStep: false,
    leadersCount: 4,
    load: true,
    error: null,
};

const users = (state = initialState, action) => {
    switch (action.type) {

      case FETCHED_USERS:
        state.participants[state.currentArr] = action.payload
        return {
          ...state,
          load: false,
          error: null
        };

      case FETCHED_NEW_USERS:

          const res = action.payload.map(value => {
          const [{place}] = state.participants[state.currentArr].filter((e) => e.name === value.name)
          return {
            ...value,
            newPlace: place - value.place
          }
        })
        state.participants.push(res);
        return {
          ...state,
          load: false,
          isNextStep: false,
          currentArr: (state.participants.length -1),
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
          load: false
        };

      case EDITED_USER_SCORE:
        state.participants[state.currentArr][action.payload.index] = {'name': action.payload.name, 'score': +action.payload.score};
        state.participants[state.currentArr].sort((a, b) => b?.score - a?.score);
        return {
          ...state
        };

      case PAGINATED_USERS:
        return {
          ...state,
          currentArr: action.payload,
          isNextStep: (state.participants.length - action.payload) -1 !== 0,
        };

      default:
        return state;
    }
}

export default users;
