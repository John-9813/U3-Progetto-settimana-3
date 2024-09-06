
import React from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
  const currentSong = useSelector(state => state.player.currentSong);

  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-100">
        <div className="col-lg-10 offset-lg-2">
          <div className="row h-100 flex-column justify-content-center align-items-center">
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src="/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="/repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
              {currentSong && (
                <div className="song-details mt-3">
                  <h5>{currentSong.title}</h5>
                  <p>{currentSong.artist}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;


