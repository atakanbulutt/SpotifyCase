// src/store.ts
import { createStore, applyMiddleware, combineReducers, Store, AnyAction, Dispatch, Middleware } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';
import releasedThisWeekReducer from './reducers/releasedThisWeekReducer';
import featuredPlaylistsReducer from './reducers/featuredPlaylistsReducer';
import browseGenresReducer from './reducers/browseGenresReducer';

const rootReducer = combineReducers({
  releasedThisWeek: releasedThisWeekReducer,
  featuredPlaylists: featuredPlaylistsReducer,
  browseGenres: browseGenresReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;

// Use Middleware instead of ThunkMiddleware
const store: Store<RootState, AnyAction> & {
  dispatch: Dispatch<AnyAction>;
} = createStore(
  rootReducer,
  applyMiddleware(thunk as Middleware<any, RootState, Dispatch<AnyAction>>)
);

export default store;