import axios from "axios";

export const fetchUsers =async () =>  {
	let response = await axios.get('http://coding-test.cube19.io/frontend/v1/starting-state');
			const payload = response.data.map((value) => value.score ? value : { ...value, score:0 }).sort((a, b) => b?.score - a?.score)
    return payload.map((_, index) => ({
        ..._,
        place: index+1
      }))
    }
