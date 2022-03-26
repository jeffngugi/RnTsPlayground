import { BASE_URL, API_KEY } from '../config';
import axios from 'axios'

export const gamesApi = {
  // later convert this url to infinite scrolling
  fetchAllGames: ({ pageParam = 1 }) =>
    fetch(`${BASE_URL}/games?key=${API_KEY}&page=${pageParam}`).then(res => {
      return res.json();
    }),

  fetchsAllGames: ({ pageParam = 1 }) =>
    axios.get(`${BASE_URL}/games?key=${API_KEY}&page=${pageParam}`)
    .then(res=>{
      console.log(res?.data)
      return res.data
    }
    )
    .catch(()=>{
      console.log('Games fetching went')
    })
};


