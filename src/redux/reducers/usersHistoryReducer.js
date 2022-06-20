import { FETCH_USERS } from '../actionType';

const initialState = {

};

const usersHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state.results,
                ...action.payload
            }
        default:
            return state;
    }
}

export default usersHistoryReducer;
