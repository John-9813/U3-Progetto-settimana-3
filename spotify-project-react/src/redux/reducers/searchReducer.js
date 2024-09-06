import { createSlice } from '@reduxjs/toolkit';

const initialSongs = [
  { id: 1, title: 'Bohemian Rhapsody', artist: 'Queen', album: { cover: 'https://e-cdns-images.dzcdn.net/images/cover/9a20f8b2547cbb74635539c219de3a84/250x250-000000-80-0-0.jpg' } },
  { id: 2, title: 'Stairway to Heaven', artist: 'Eminem', album: { cover: 'https://e-cdns-images.dzcdn.net/images/cover/bcb2a6548c1dadd89d0e94e6fce6a754/250x250-000000-80-0-0.jpg' } },
  { id: 3, title: 'Lose Yourself', artist: 'Eminem', album: { cover: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg' } },

];
// potevo fare meglio ma ero veramente a corto di tempo per una serie di problemi

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: initialSongs,
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchResults } = searchSlice.actions;
export default searchSlice.reducer;

