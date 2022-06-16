import { FETCH_USERS } from '../actionType';

const initialState = {
    day: 1,
    results: []
};

const usersHistoryScoreReducer = (state = initialState, action) => {
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

export default usersHistoryScoreReducer;
