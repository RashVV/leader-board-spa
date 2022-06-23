import { EDIT_USER_SCORE, ADD_NEW_USER, FETCH_USERS } from './actionType';
import axios from 'axios';

export const fetchUsersAction = () => {
	return async (dispatch) => {
		try {
			let response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			const payload = response.data.map((value, ) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)

		    dispatch({ type: FETCH_USERS, payload });
	} catch (e) {
		console.warn(e)
		dispatch({ type: FETCH_USERS, payload: [], error: e });
	}
};
};

export const editUserScore = user => ({
  type: EDIT_USER_SCORE,
  payload: user.score
})

export const addNewUser = ({user}) =>  ({
    type: ADD_NEW_USER,
    payload: user
  })

