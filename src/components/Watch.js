import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import {
    Tender,
    StrawberrySkittles,
    IAlreadyKnow,
    DinnerWithYourThoughts,
    Dayglow
} from './WatchFilm';

const Watch = ({ match }) => {
    return (
        <Switch>
            <Route>
                <Route path={`${match.url}/tender`} component={Tender} />
                <Route path={`${match.url}/strawberryskittles`} component={StrawberrySkittles} />
                <Route path={`${match.url}/ialreadyknow`} component={IAlreadyKnow} />
                <Route path={`${match.url}/dinnerwithyourthoughts`} component={DinnerWithYourThoughts} />
                <Route path={`${match.url}/dayglow`} component={Dayglow} />
            </Route>
        </Switch>
    )
}

export default Watch;
