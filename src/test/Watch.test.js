import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import Watch from '../components/Watch';

describe('Watch component', () => {
    test.each(
        [
            ['tender', 'https://www.youtube.com/embed/E3AnQ7Nlnug?si=JmoZxFNcdn1ViruJ'],
            ['strawberryskittles', 'https://www.youtube.com/embed/PBW3g_qhjds?si=JLaBL0hZXhsy1aZX'],
            ['ialreadyknow', 'https://www.youtube.com/embed/dMxZCmdw6cQ?si=0Wi4FVme5fHml2ES'],
            ['dinnerwithyourthoughts', 'https://www.youtube.com/embed/PBO9U95q3dk?si=PWXvCKzTXAXup0d-'],
            ['dayglow', 'https://www.youtube.com/embed/oah9mf9Wi48?si=lfpjzdp1sj_OZX-g'],
        ]
    )('Film %s renders with correct source', (film, source) => {
        render(
            <MemoryRouter initialEntries={[`/watch/${film}`]}>
                <Watch match={{ url: '/watch' }} />
            </MemoryRouter>
        );

        expect(screen.getByTestId('watch-iframe').getAttribute('src')).toBe(source);
    });

    test.each(
        [
            ['tender', 'Tender follows a young chef who will do anything to reach the top.'],
            ['strawberryskittles', 'Strawberry Skittles is a music video featuring a song ' +
                'written by Noelle Caroll.'],
            ['ialreadyknow', 'N/A, featuring a song written by Flora Fiora.'],
            ['dinnerwithyourthoughts', 'Dinner With Your Thoughts follows a new couple on ' +
                'their first date, along with all their inner thoughts that come with it.'],
            ['dayglow', 'N/A, featuring a song written by Finn Mungo.'],
        ]
    )('Film %s renders with correct description', (film, description) => {
        render(
            <MemoryRouter initialEntries={[`/watch/${film}`]}>
                <Watch match={{ url: '/watch' }} />
            </MemoryRouter>
        );

        expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    });
});
