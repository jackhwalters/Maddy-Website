import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer component', () => {
    test('Social media buttons with correct hyperrefs', () => {
        render(<Footer />);
        const instagramLink = screen.getByTestId('insta-button');
        const tiktokLink = screen.getByTestId('tiktok-button');
        const imdbLink = screen.getByTestId('imdb-button');

        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/maddywfilm/');
        expect(tiktokLink).toHaveAttribute('href', 'https://www.tiktok.com/@maddogpictures');
        expect(imdbLink).toHaveAttribute('href', 'https://imdb.com/name/nm14547455/');
    });

    test('Social media buttons open in new tab', () => {
        render(<Footer />);
        const instagramLink = screen.getByTestId('insta-button');
        const tiktokLink = screen.getByTestId('tiktok-button');
        const imdbLink = screen.getByTestId('imdb-button');

        expect(instagramLink).toHaveAttribute('target', '_blank');
        expect(tiktokLink).toHaveAttribute('target', '_blank');
        expect(imdbLink).toHaveAttribute('target', '_blank');
    });

    test('Social media buttons have correct icons', () => {
        render(<Footer />);
        const instagramIcon = screen.getByTestId('footer-insta-icon');
        const tiktokIcon = screen.getByTestId('footer-tiktok-icon');
        const imdbIcon = screen.getByTestId('footer-imdb-icon');

        expect(instagramIcon).toHaveAttribute('data-icon', 'instagram');
        expect(tiktokIcon).toHaveAttribute('data-icon', 'tiktok');
        expect(imdbIcon).toHaveAttribute('data-icon', 'imdb');
    })

    test('Copyright text is rendered', () => {
        render(<Footer />);
        expect(screen.getByText(/© Maddy Walters \d{4}\. All rights reserved\./i)).toBeInTheDocument();
    });
});
