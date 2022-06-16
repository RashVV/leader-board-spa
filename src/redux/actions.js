import { EDIT_USER_SCORE, ADD_NEW_USER, FETCH_USERS } from './actionType';
import axios from 'axios';

export const fetchUsersAction = () => {
	return async (dispatch) => {
		try {
			let response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
		response && dispatch({ type: FETCH_USERS, payload: response.data.map((value, ) => value.score ? value : { ...value, score:0 })});
	} catch (e) {
	console.warn(e);
	}
};
};

export const editUserScore = user => ({
    type: EDIT_USER_SCORE,
    payload: user
})

export const addNewUser = () => ({
    type: ADD_NEW_USER,
    payload: ''
})
