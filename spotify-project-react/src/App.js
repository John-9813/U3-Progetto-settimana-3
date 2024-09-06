import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Sidebar from './components/Sidebar';
import MainPage from './components/MainPage';
import Player from './components/Player';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainPage />
        </div>
        <Player />
      </div>
    </Provider>
  );
}

export default App;


