import './css/App.css';
import React from 'react';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
          <header>
              <div className="header-btns">
                  <a href="/portfolio" className="header-btn">Portfolio</a>
                  <a href="/other" className="header-btn">Other</a>
                  <a href="/about" className="header-btn">About</a>
                  <a href="/contact" className="header-btn">Contact</a>
              </div>
          </header>
          <div className="image-grid">
              <Gallery />
          </div>
    </div>
  );
}

export default App;
