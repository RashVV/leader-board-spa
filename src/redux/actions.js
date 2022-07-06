import { EDITED_USER_SCORE, ADDED_NEW_USER, FETCHED_USERS, FETCH_FAILED, FETCHED_NEW_USERS, PAGINATED_USERS } from './actionType';
import {getUsers} from '../services/fetchUsers';

export const fetchUsersAction = () => {
	return async (dispatch) => {
		try {
      const places = await getUsers();
		    dispatch({ type: FETCHED_USERS, payload: places });
	  } catch (e) {
		  console.warn(e)
		  dispatch({ type: FETCH_FAILED,  payload: [], error: e });
	    }
  };
};

export const fetchNewUsersAction = () => {
	return async (dispatch) => {
		try {
        const places = await  getUsers()
		    dispatch({ type: FETCHED_NEW_USERS, payload: places });
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
  type: PAGINATED_USERS,
  payload: currentArr
  })
