import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';
import './css/App.css';

function App() {
    return (
        <Router>
            <div className="App">
            <Header />

            <div className="main-container">
                <Switch>
                    <Route path="/" component={Gallery} />
                    <Route path="/portfolio" component={() => {return (<div>the Portfolio!</div>)}} />
                </Switch>                    
            </div>

            <Footer />
          </div>
        </Router>
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
