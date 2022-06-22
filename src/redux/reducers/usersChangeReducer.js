import { EDIT_USER_SCORE, ADD_NEW_USER } from '../actionType';

const initialState = {
    id: 1,
    name: '',
    score: 0
};

const usersChangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_USER:
            return {
                ...state,
                ...action.payload
            }
        case EDIT_USER_SCORE:
            return {
                ...state.score,
                ...action.payload
            }

        default:
            return state;
    }
}

export default usersChangeReducer;
