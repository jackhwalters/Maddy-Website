import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('About component', () => {
    test('Image renders', () => {
        render(<About />);
        expect(screen.getByAltText('About Image')).toBeInTheDocument();
    });

    test('About section contains correct links', () => {
        render(<About />);

        const madDogLink = screen.getByTestId('mad-dog-link');
        const emailLink = screen.getByTestId('maddy-email');

        expect(madDogLink).toHaveAttribute('href', 'https://maddogpictures.co.uk/');
        expect(emailLink).toHaveAttribute('href', 'mailto:hello@maddywalters.com');
    });
});