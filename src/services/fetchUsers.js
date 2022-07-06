import axios from "axios";

export  async  function getUsers() {
  const url = 'http://coding-test.cube19.io/frontend/v1/starting-state';
  try{
    const response =  await axios.get(`${url}`)
    const payload = response.data.map((value) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score);
    const places = payload.map((_, index) => ({
      ..._,
        place: index+1
    }))
      return places
  } catch (e) {
    e.response.status === 500 ? getUsers() : console.error(e);
  }
}
