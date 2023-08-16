// import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from '../utils/constants';

export async function getTrendingMoviesPreview () {
  const url = `${BASE_URL}/trending/movie/day?lenguage=es`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
  };

  try {
    const res = await fetch(url, options);

    if (!res.ok) throw Error(res);
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
  }
}
