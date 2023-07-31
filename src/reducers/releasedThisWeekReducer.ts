// src/reducers/releasedThisWeekReducer.ts
const initialState = {
    loading: true,
    songs: [],
    error: '',
  };
  
  const releasedThisWeekReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'FETCH_RELEASED_THIS_WEEK_REQUEST':
        return {
          ...state,
          loading: true,
          error: '',
        };
      case 'FETCH_RELEASED_THIS_WEEK_SUCCESS':
        return {
          ...state,
          loading: false,
          songs: action.payload,
        };
      case 'FETCH_RELEASED_THIS_WEEK_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default releasedThisWeekReducer;