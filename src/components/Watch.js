import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import {
    Film1,
    Film2,
    Film3
} from './WatchFilm';

const Watch = ({ match }) => {
    return (
        <Switch>
            <Route>
                <Route path={`${match.url}/film1`} component={Film1} />
                <Route path={`${match.url}/film2`} component={Film2} />
                <Route path={`${match.url}/film3`} component={Film3} />
            </Route>
        </Switch>
    )
}

export default Watch;
