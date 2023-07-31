// src/actions/featuredPlaylistsActions.ts
import { Dispatch } from 'redux';
import { getFeaturedPlaylists } from '../spotifyAPI';
import { AppThunk } from '../store';

export const fetchFeaturedPlaylists = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_FEATURED_PLAYLISTS_REQUEST' });
    getFeaturedPlaylists()
      .then((data) => {
        dispatch({
          type: 'FETCH_FEATURED_PLAYLISTS_SUCCESS',
          payload: data.playlists.items,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_FEATURED_PLAYLISTS_FAILURE',
          payload: 'Error fetching featured playlists.',
        });
      });
  };
};