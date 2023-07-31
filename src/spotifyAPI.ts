// src/spotifyAPI.ts
import axios, { AxiosInstance } from 'axios';

const BASE_URL = 'https://api.spotify.com/v1';
const token ="BQAay_Onr3ZRtT7HgBbVl0qJNeB-nrY6rXWh0Hz4HEsILwmayUVesxvJcYnnTuJnY1HYSyZjkykeRxLmDwFk7H809VTzO-u79_oirq2seAFutAjSJx4"

// Axios istemci (client) oluşturma fonksiyonu
// AxiosInstance axios içinde type belirtiyor
const createAxiosClient = (): AxiosInstance => {
  const client = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  return client;
};

export const getNewReleases = async () => {
  const client = createAxiosClient();
  const response = await client.get('/browse/new-releases');
  return response.data;
};

export const getFeaturedPlaylists = async () => {
  const client = createAxiosClient();
  const response = await client.get('/browse/featured-playlists');
  return response.data;
};

export const getGenres = async () => {
  const client = createAxiosClient();
  const response = await client.get('/browse/categories');
  return response.data;
};