import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import WatchFilm from './WatchFilm';

const Watch = ({ match }) => {
    return (
        <Switch>
            <Route
                path={`${match.url}/tender`}
                render={() => (
                    <WatchFilm
                        src="https://www.youtube.com/embed/E3AnQ7Nlnug?si=JmoZxFNcdn1ViruJ"
                        title="Tender"
                        releaseDate="December 2023"
                        role="Role: Clapper and Lead Editor."
                        description="Tender follows a young chef who will do anything to reach the top."
                    />
                )}
            />
            <Route
                path={`${match.url}/strawberryskittles`}
                render={() => (
                    <WatchFilm
                        src="https://www.youtube.com/embed/PBW3g_qhjds?si=JLaBL0hZXhsy1aZX"
                        title="Strawberry Skittles"
                        releaseDate="May 2023"
                        role="Role: Director and Editor."
                        description="Strawberry Skittles is a music video featuring a song written 
                            by Noelle Caroll."
                    />
                )}
            />
            <Route
                path={`${match.url}/ialreadyknow`}
                render={() => (
                    <WatchFilm
                        src="https://www.youtube.com/embed/dMxZCmdw6cQ?si=0Wi4FVme5fHml2ES"
                        title="I Already Know"
                        releaseDate="September 2023"
                        role="Role: Director and Editor."
                        description="N/A, featuring a song written by Flora Fiora."
                    />
                )}
            />
            <Route
                path={`${match.url}/dinnerwithyourthoughts`}
                render={() => (
                    <WatchFilm
                        src="https://www.youtube.com/embed/PBO9U95q3dk?si=PWXvCKzTXAXup0d-"
                        title="Dinner With Your Thoughts"
                        releaseDate="May 2023"
                        role="Role: Director and Editor."
                        description="Dinner With Your Thoughts follows a new couple on their first date, 
                            along with all their inner thoughts that come with it."
                    />
                )}
            />
            <Route
                path={`${match.url}/dayglow`}
                render={() => (
                    <WatchFilm
                        src="https://www.youtube.com/embed/oah9mf9Wi48?si=lfpjzdp1sj_OZX-g"
                        title="Dayglow"
                        releaseDate="October 2023"
                        role="Role: Director and Editor."
                        description="N/A, featuring a song written by Finn Mungo."
                    />
                )}
            />
        </Switch>
    )
}

export default Watch;
