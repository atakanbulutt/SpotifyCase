// src/reducers/featuredPlaylistsReducer.ts
const initialState = {
    loading: true,
    playlists: [],
    error: '',
  };
  
  const featuredPlaylistsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_FEATURED_PLAYLISTS_REQUEST':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_FEATURED_PLAYLISTS_SUCCESS':
        return {
          ...state,
          loading: false,
          playlists: action.payload,
        };
      case 'FETCH_FEATURED_PLAYLISTS_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default featuredPlaylistsReducer;