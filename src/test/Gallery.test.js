import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Gallery from '../components/Gallery';

describe('Gallery component', () => {
    const imageKitRoot = "https://ik.imagekit.io/jackhwalters/tr:h-ih,w-iw:q-20,bl-6/";
    test.each(
        [
            ['image-tender-1', 'gifs/tender.gif', 'container-tender-1'],
            ['image-strawberryskittles', 'gifs/strawberry_skittles.gif', 'container-strawberryskittles'],
            ['image-dwyt', 'gifs/dinner_with_your_thoughts.gif', 'container-dwyt'],
            ['image-ialreadyknow', 'gifs/i_already_know.gif', 'container-ialreadyknow'],
            ['image-dayglow-2', 'gifs/dayglow2.gif', 'container-dayglow-2'],
            ['image-dayglow', 'gifs/dayglow.gif', 'container-dayglow'],
        ]
    )('%s has src %s when %s is hovered over', async (image, expected, container) => {
        render(<Gallery />);

        const containerDiv = screen.getByTestId(container);

        await act(() => {
            fireEvent.mouseOver(containerDiv);
        });

        const imageDiv = screen.getByTestId(image);
        expect(imageDiv).toHaveAttribute('src', imageKitRoot.concat(expected));
    });
});
