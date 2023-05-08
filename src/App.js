import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import './css/App.css';

function App() {
  return (
    <div className="App">
            <Header /> 
        <div className="main-container">
            <Gallery />
        </div>
            <Footer />
    </div>
  );
}

export default App;

// 1. Name in top left header. Same font ✅
// 2. One of the panes to be text ✅
// 3. Video play page is like this https://www.willdohrn.net/blog/belfast-with-theo-cottle
// 4. IMDB: https://m.imdb.com/name/nm14547455/,
// Insta: https://www.instagram.com/maddywfilm/,
// TikTok: TBC ✅
// 5. Mobile header inspo: https://eightinc.com/
