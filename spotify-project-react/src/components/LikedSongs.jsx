import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentSong } from '../redux/reducers/playerReducer';
import { toggleLikeSong } from '../redux/reducers/likesReducer';

const LikedSongs = () => {
  const dispatch = useDispatch();
  const likedSongs = useSelector(state => state.likes.likedSongs);
  const allSongs = useSelector(state => state.search.results);

// Filtra i dettagli delle canzoni che sono state messe "Mi piace"
  const likedSongsDetails = allSongs.filter(song => likedSongs.includes(song.id));

  const handlePlay = (song) => {
    dispatch(setCurrentSong(song));
  };

  const handleLike = (songId) => {
    dispatch(toggleLikeSong(songId));
  };

  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-10">
          <h2>Your Liked Songs</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {likedSongsDetails.map(song => (
              <div className="col mb-4" key={song.id}>
                <div className="card">
                  <img src={song.album.cover} className="card-img-top" alt={song.title} />
                  <div className="card-body">
                    <h5 className="card-title">{song.title}</h5>
                    <button className="btn btn-primary" onClick={() => handlePlay(song)}>Play</button>
                    <button 
                      className={`btn ${likedSongs.includes(song.id) ? 'btn-success' : 'btn-outline-success'}`} 
                      onClick={() => handleLike(song.id)}
                    >
                      {likedSongs.includes(song.id) ? 'Liked' : 'Like'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LikedSongs;

