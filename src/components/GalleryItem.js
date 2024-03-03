import React from 'react';

const GalleryItem = ({
    imagePositionCSS,
    isHoverEnabled,
    handleMouseEnter,
    handleMouseExit,
    testId,
    hrefURL,
    title,
    hoverStateBool,
    hoverStateInd,
    gifSrc,
    imgSrc
}) => {
    return (
        <div 
            className={`image-container ${imagePositionCSS}`}
            onMouseEnter={isHoverEnabled ? () => handleMouseEnter(hoverStateInd) : null}
            onMouseLeave={isHoverEnabled ? () => handleMouseExit(hoverStateInd) : null}
            data-testid={`container-${testId}`}
        >
            <a href={hrefURL}>
                <div className="image-overlay" data-testid={`overlay-${testId}`}>
                    <p>
                        {title}
                   </p>
                </div>
                <img
                    src={hoverStateBool ? gifSrc : imgSrc}
                    className="img-fluid"
                    alt={title}
                    data-testid={`image-${testId}`}
                />
            </a>
        </div>
    )
}

export default GalleryItem;
