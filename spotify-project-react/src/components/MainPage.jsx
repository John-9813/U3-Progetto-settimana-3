
import React from 'react';
import MusicSection from './MusicSection';

const MainPage = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <div className="row">
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <a href="#">TRENDING</a>
          <a href="#">PODCAST</a>
          <a href="#">MOODS AND GENRES</a>
          <a href="#">NEW RELEASES</a>
          <a href="#">DISCOVER</a>
        </div>
      </div>
      <MusicSection title="Rock Classics" id="rockSection" className="title" />
      <MusicSection title="Pop Culture" id="popSection" className="title" />
      <MusicSection title="#HipHop" id="hipHopSection" className="title" />
    </main>
  );
}

export default MainPage;
