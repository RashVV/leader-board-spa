import { EDITED_USER_SCORE, ADDED_NEW_USER, FETCHED_USERS, FETCH_FAILED, FETCH_NEW_USERS, PAGINATE_USERS } from './actionType';
import axios from 'axios';

export const fetchUsersAction = () => {
	return async (dispatch) => {
		try {
			let response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			const payload = response.data.map((value, ) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)
		    dispatch({ type: FETCHED_USERS, payload });
	  } catch (e) {
		  console.warn(e)
		  dispatch({ type: FETCH_FAILED,  payload: [], error: e });
	    }
  };
};

export const fetchNewUsersAction = () => {
	return async (dispatch) => {
		try {
			let response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			const payload = response.data.map((value, ) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)
      dispatch({ type: FETCH_NEW_USERS, payload });
	  } catch (e) {
		  console.warn(e)
		  dispatch({ type: FETCH_FAILED,  payload: [], error: e });
	    }
  };
};

export const editUserScoreAction = user => ({
  type: EDITED_USER_SCORE,
  payload: user.score
})

export const addNewUserAction = ({user}) =>  ({
  type: ADDED_NEW_USER,
  payload: user
  })

export const paginationUsersAction = (currentArr) => ({
  type: PAGINATE_USERS,
  payload: currentArr
  })
