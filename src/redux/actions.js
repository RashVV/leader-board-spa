import { EDITED_USER_SCORE, ADDED_NEW_USER, FETCH_USERS, FETCH_FAILED, FETCH_NEW_USERS } from './actionType';
import axios from 'axios';

export const fetchUsersAction = () => {
	return async (dispatch) => {
		try {
			const response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			const payload = response.data.map((value, ) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)

		    dispatch({ type: FETCH_USERS, payload });
	  } catch (e) {
		  console.warn(e)
		  dispatch({ type: FETCH_FAILED,  payload: [], error: e });
	    }
  };
};

export const addNewDayUsers = () => {
  return async (dispatch) => {
  try {
    const response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
    const payload = response.data.map((value, ) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)

      dispatch({ type: FETCH_NEW_USERS, payload });
  } catch (e) {
    console.warn(e)
    dispatch({ type: FETCH_FAILED,  payload: [], error: e });
    }
};

}

export const editUserScore = user => ({
  type: EDITED_USER_SCORE,
  payload: user.score
})

export const addNewUser = ({user}) =>  ({
    type: ADDED_NEW_USER,
    payload: user
  })

