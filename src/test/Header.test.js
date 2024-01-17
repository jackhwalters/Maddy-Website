import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

jest.mock('react-router-dom', () => ({
    useLocation: jest.fn()
}));

describe('Header component', () => {
    beforeEach(() => {
        useLocation.mockReturnValue({
            pathname: '/'
        });
    })

    test('Title text is rendered', () => {
        render(<Header />);
        expect(screen.getByText(/Maddy Walters/i)).toBeInTheDocument();
    });

    test('Portfolio button is selected when location is /', () => {
        render(<Header />)
        const portfolioButton = screen.getByTestId('portfolio-button');
        const aboutButton = screen.getByTestId('about-button');

        expect(portfolioButton).toHaveClass('header-btn selected');
        expect(aboutButton).toHaveClass('header-btn');
    });

    test('About button is selected when location is /about', () => {
        useLocation.mockReturnValue({
            pathname: '/about'
        });
        render(<Header />)
        const portfolioButton = screen.getByTestId('portfolio-button');
        const aboutButton = screen.getByTestId('about-button');

        expect(portfolioButton).toHaveClass('header-btn');
        expect(aboutButton).toHaveClass('header-btn selected');
    });
});
