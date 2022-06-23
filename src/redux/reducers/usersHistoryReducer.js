import { FETCH_USERS, ADD_NEW_USER, EDIT_USER_SCORE, FETCH_FAILED } from '../actionType';

const initialState = {
    data: [],
    load: true,
    error: null,
};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USERS:
            return {
                ...state,
                data: action.payload,
                load: false,
                error: null
            }

            case FETCH_FAILED:
              return {...state, error: true}
        case ADD_NEW_USER:
          state.data.push(action.payload);
          state.data.sort((a, b) => b?.score - a?.score);
            return {
                ...state,
                data: state.data,
                load: false
            }
        case EDIT_USER_SCORE:
          state.data[action.payload.index] = action.payload;
          state.data.sort((a, b) => b?.score - a?.score);
          debugger
            return {
                ...state
            }
        default:
            return state;
    }
}

export default usersHistoryReducer;
