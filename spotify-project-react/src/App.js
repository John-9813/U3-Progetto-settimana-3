import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Player from './components/Player';
import LikedSongs from './components/LikedSongs';

const App = () => {
  return (
    // Provider rende disponibile lo store Redux a tutta l'applicazione
    <Provider store={store}> 
      <BrowserRouter>
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/library" element={<LikedSongs />} />
            </Routes>
          </div>
          <Player />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

// non ho avuto tempo per aggiungere i vari commenti a causa dei problemi riscontrati



