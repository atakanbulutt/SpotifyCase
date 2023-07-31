// src/actions/releasedThisWeekActions.ts
import { Dispatch } from 'redux';
import { getNewReleases } from '../spotifyAPI';
import { AppThunk } from '../store';

export const fetchReleasedThisWeek = (): AppThunk => {
  return (dispatch: Dispatch) => {
    dispatch({ type: 'FETCH_RELEASED_THIS_WEEK_REQUEST' });
    getNewReleases()
      .then((data) => {
        dispatch({
          type: 'FETCH_RELEASED_THIS_WEEK_SUCCESS',
          payload: data.albums.items,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'FETCH_RELEASED_THIS_WEEK_FAILURE',
          payload: 'Error fetching released songs.',
        });
      });
  };
};