import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { fetchReleasedThisWeek } from '../actions/releasedThisWeekActions';
import { RootState } from '../store';

interface Song {
  id: number;
  name: string;
  // Diğer özellikler eklenebilir...
}

const ReleasedThisWeek: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();

  const { loading, songs, error } = useSelector(
    (state: RootState) => state.releasedThisWeek
  );

  useEffect(() => {
    dispatch(fetchReleasedThisWeek());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Released This Week</h2>
      {songs.map((song: Song) => (
        <div key={song.id}>{song.name}</div>
      ))}
    </div>
  );
};

export default ReleasedThisWeek;