import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../reducers/playerReducer';
import likesReducer from '../reducers/likesReducer';
import searchReducer from '../reducers/searchReducer';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    likes: likesReducer,
    search: searchReducer,
  },
});



