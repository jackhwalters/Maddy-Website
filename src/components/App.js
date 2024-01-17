import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Portfolio from './Portfolio';
import About from './About';
import Watch from './Watch';
import '../css/App.css';

function App() {
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
