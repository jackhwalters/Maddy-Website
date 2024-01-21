import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Gallery from '../components/Gallery';

describe('Gallery component', () => {
    test('Image renders', () => {
        render(<Gallery />);
        expect(screen.getByAltText('Strawberry Skittles')).toBeInTheDocument();
    });

    test.each(
        [
            ['image-tender-1', 'gifs/tender.gif', 'container-tender-1'],
            ['image-strawberryskittles', 'gifs/strawberry_skittles.gif', 'container-strawberryskittles'],
            ['image-dwyt', 'gifs/dinner_with_your_thoughts.gif', 'container-dwyt'],
            ['image-ialreadyknow', 'gifs/i_already_know.gif', 'container-ialreadyknow'],
            ['image-tender-2', 'gifs/tender.gif', 'container-tender-2'],
            ['image-dayglow', 'gifs/dayglow.gif', 'container-dayglow'],
        ]
    )('%s has src %s when %s is hovered over', (image, expected, container) => {
        render(<Gallery />);

        const containerDiv = screen.getByTestId(container);
        fireEvent.mouseOver(containerDiv);

        const imageDiv = screen.getByTestId(image);
        expect(imageDiv).toHaveAttribute('src', expected);
    });
});