import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from '../utils/constants.js';

const api = axios.create({
  baseURL: BASE_URL,
  params: { language: 'es' },
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${ACCESS_TOKEN}`
  }
});

export async function getTrendingMoviesPreview ({ page = 1 }) {
  try {
    const res = await api.get(`/trending/movie/day?page=${page}`);

    if (res.status !== 200) throw Error(res);

    if (page > res?.data?.total_pages) return [];
    return res?.data?.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getCategoriesPreview () {
  try {
    const res = await api.get('/genre/movie/list');

    if (res.status !== 200) throw Error(res);

    return res?.data.genres;
  } catch (error) {
    console.error(error);
  }
}

export async function findById ({ id }) {
  try {
    const res = await api.get(`/movie/${id}`);

    if (res.status !== 200) throw Error(res);

    return res?.data;
  } catch (error) {
    console.error(error);
  }
}

export async function findAllByCategory ({ id, page = 1 }) {
  try {
    const res = await api.get(`/discover/movie?with_genres=${id}&page=${page}`);

    if (res.status !== 200) throw Error(res);

    if (page > res?.data?.total_pages) return [];
    return res?.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function searchByMovieName ({ query, page = 1 }) {
  try {
    const res = await api.get(`/search/movie?query=${query}`);

    if (res.status !== 200) throw Error(res);

    if (page > res?.data?.total_pages) return [];

    return res?.data?.results;
  } catch (error) {
    console.error(error);
  }
}
