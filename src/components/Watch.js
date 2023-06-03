import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Film1 from './watch/Film1';

const Watch = ({ match }) => {
    return (
        <Switch>
            <Route>
                <Route path={`${match.url}/film1`} component={Film1} />
            </Route>
        </Switch>
    )
}

export default Watch;
