import { FETCH_USERS } from '../actionType';

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
        default:
            return state;
    }
}

export default usersHistoryReducer;
