import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchResults } from '../redux/reducers/searchReducer';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`);
    const data = await response.json();
    dispatch(setSearchResults(data.data));
  };

  return (
    <aside className="col col-2">
      <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
        <div className="container flex-column align-items-start">
          <Link className="navbar-brand" to="/">
            <img src="/logo.png" alt="Spotify Logo" width="131" height="40" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/">
                    <i className="bi bi-house-door-fill"></i> Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-item nav-link d-flex align-items-center" to="/library">
                    <i className="bi bi-book-fill"></i> Your Library
                  </Link>
                </li>
                <li>
                  <div className="input-group mt-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
                    <div className="input-group-append">
                      <button className="btn btn-outline-secondary btn-sm h-100" onClick={handleSearch}>GO</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">Sign Up</button>
          <button className="btn login-btn" type="button">Login</button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#"> Privacy</a>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;




