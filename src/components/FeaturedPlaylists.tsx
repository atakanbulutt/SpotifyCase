// src/components/FeaturedPlaylists.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'; // Import ThunkDispatch
import { AnyAction } from 'redux'; // Import AnyAction
import { fetchFeaturedPlaylists } from '../actions/featuredPlaylistsActions';
import { RootState } from '../store'; // Import RootState

const FeaturedPlaylists: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch(); // Explicitly type dispatch

  const { loading, playlists, error } = useSelector(
    (state: RootState) => state.featuredPlaylists
  );

  useEffect(() => {
    dispatch(fetchFeaturedPlaylists());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Featured Playlists</h2>
      {playlists.map((playlist: any) => (
        <div key={playlist.id}>{playlist.name}</div>
      ))}
    </div>
  );
};

export default FeaturedPlaylists;