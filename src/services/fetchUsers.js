import axios from "axios";

export default async  function getUsers() {
  debugger
  const url = 'http://coding-test.cube19.io/frontend/v1/starting-state';
   await axios.get(`${url}`)
      .then((response) => {
        const payload = response.data.map((value) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score);
        const places = payload.map((_, index) => ({
        ..._,
        place: index+1
      }))
      return  [ places ]
    })
    .catch(error => console.error(`Error: ${error}`));
}


