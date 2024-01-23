import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import ReactGA from 'react-ga4';
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Watch from './Watch';
import '../css/App.css';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);

function App() {

    useEffect(() => {
        ReactGA.send(
            {
                hitType: "pageview",
                page: window.location.pathname + window.location.search
            }
        );
    }, []);

    return (
        <Router>
            <div className="App">
                <Header />

                <div className="main-container">
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/watch" component={Watch} />
                        <Route path="/" component={Portfolio} />
                    </Switch>
                </div>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
