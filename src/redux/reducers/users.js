import { FETCHED_USERS, ADDED_NEW_USER, EDITED_USER_SCORE, FETCH_FAILED, FETCHED_NEW_USERS, PAGINATED_USERS } from '../actionType';

const initialState = {
    participants: [],
    currentArr: 0,
    isNextStep: false,
    load: true,
    error: false,
};

const users = (state = initialState, action) => {

  switch (action.type) {
    case FETCHED_USERS:
      state.participants[state.currentArr] = action.payload
        return {
          ...state,
          load: false,
          error: action.payload === undefined ? true : false
        };

      case FETCHED_NEW_USERS:
        const res = action.payload.map(value => {
        const [{place}] = state.participants[state.currentArr].filter((e) => e.name === value.name)
          return {
            ...value,
            gapPlace: place - value.place,
            error: action.payload === undefined ? true : false
          }
        })
        state.participants.push(res);
         return {
          ...state,
          load: false,
          isNextStep: false,
          currentArr: (state.participants.length -1),
          error: action.payload === undefined ? true : false
        };

      case FETCH_FAILED:
        state.participants[state.currentArr] = action.payload
        return {
          ...state,
          error: action.payload.length === 0 ? true : false
        };

      case ADDED_NEW_USER:
        state.participants[state.currentArr].push(action.payload);
        state.participants[state.currentArr].sort((a, b) => b?.score - a?.score);
        return {
          ...state,
          load: false
        };

      case EDITED_USER_SCORE:
        state.participants[state.currentArr][action.payload.index] = {'name': action.payload.name, 'score': +action.payload.score, 'oldPlace': action.payload.index+1, 'gapPlace': action.payload.gapPlace === undefined ?  0 : action.payload.gapPlace, 'newPlace': action.payload.newPlace === undefined ? action.payload.place : action.payload.newPlace };
        state.participants[state.currentArr].sort((a, b) => b?.score - a?.score);
        const recount = state.participants[state.currentArr].map(value => {
          state.participants[state.currentArr].filter((e) => e.name === value.name)?.forEach((item) => {
            return value = [{'name': item.name, 'score': item.score, 'oldPlace': item.oldPlace ? item.oldPlace : item.place }];
          });
            return {
              ...value,
              newPlace: value.index+1,
            }
          })
        const endOfADay = Object.assign.apply({}, [recount.flat(Infinity)]);
        var dayChanges = endOfADay.map(function(a) {return a[0];});
        var finalScore = dayChanges.map((value, index) => {
        let [{place}] = dayChanges.filter((e) => e.name === value.name)
          return {
            ...value,
            oldPlace: value.oldPlace,
            newPlace: index+1,
            gapPlace: index+1 - value.oldPlace
          }
        })
        state.participants[state.currentArr].splice(0, 8);
        state.participants[state.currentArr].push(finalScore[0], finalScore[1], finalScore[2], finalScore[3], finalScore[4], finalScore[5], finalScore[6], finalScore[7]);
          return {
            ...state
          };

      case PAGINATED_USERS:
        return {
          ...state,
          currentArr: action.payload,
          isNextStep: (state.participants.length - action.payload) -1 !== 0,
        };

      default:
        return state;
    }
}

export default users;
