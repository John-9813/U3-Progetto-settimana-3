import { createSlice } from '@reduxjs/toolkit';

const likesSlice = createSlice({
  name: 'likes',
  initialState: {
    likedSongs: [],
  },
  reducers: {
    toggleLikeSong: (state, action) => {
      const songId = action.payload;
      if (state.likedSongs.includes(songId)) {
        state.likedSongs = state.likedSongs.filter(id => id !== songId);
      } else {
        state.likedSongs.push(songId);
      }
    },
  },
});

export const { toggleLikeSong } = likesSlice.actions;
export default likesSlice.reducer;

