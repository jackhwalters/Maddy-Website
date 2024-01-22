import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from '../components/App';

describe('App component', () => {
    test('Header renders', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('header-portfolio-button')).toBeInTheDocument()
    });

    test('Body renders', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('container-tender-1')).toBeInTheDocument()
    });

    test('Footer renders', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        expect(screen.getByTestId('footer-insta-icon')).toBeInTheDocument()
    });
});
