import React from 'react';
import ReleasedThisWeek from './components/ReleasedThisWeek';
import FeaturedPlaylists from './components/FeaturedPlaylists';
import BrowseGenres from './components/BrowseGenres';

const App: React.FC = () => {
  return (
    <div>
      <ReleasedThisWeek />
      <FeaturedPlaylists />
      <BrowseGenres />
    </div>
  );
};

export default App;