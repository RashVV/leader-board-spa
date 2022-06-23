import { FETCH_USERS, ADD_NEW_USER, EDIT_USER_SCORE } from '../actionType';

const initialState = {
    data: [],
    load: true
};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USERS:
            return {
                ...state,
                data: action.payload,
                load: false
            }
        case ADD_NEW_USER:
            return {
                ...state,
                data: state.data + action.payload,
                load: false
            }
        case EDIT_USER_SCORE:
            return {
                ...state.data,
                ...action.payload
            }
        default:
            return state;
    }
}

export default usersHistoryReducer;
