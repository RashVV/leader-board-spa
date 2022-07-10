import axios from "axios";

export function getUsers() {
  return axios.get('http://coding-test.cube19.io/frontend/v1/starting-state').then((response) => {
    const payload = response.data.map((value) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score);
    const places = payload.map((_, index) => ({
      ..._,
        place: index+1
    }))
      return places;
  }).catch((e) => {
    return Promise.reject(e);
  })
}
