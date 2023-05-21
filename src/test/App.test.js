import '@testing-library/jest-dom'
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/© Maddy Walters 2023. All rights reserved./i);
    expect(linkElement).toBeInTheDocument();
});
