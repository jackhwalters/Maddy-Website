import React from 'react';
import { IKImage, IKContext } from 'imagekitio-react'

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
    imgSrc,
    imgClass
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
                <IKContext urlEndpoint="https://ik.imagekit.io/jackhwalters/">
                    <IKImage
                        path={hoverStateBool ? gifSrc : imgSrc}
                        transformation={[{
                            "height": "ih",
                            "width": "iw",
                        }]}
                        lqip={{ active: true }}
                        className={imgClass}
                        alt={title.concat(" Image")}
                        data-testid={`image-${testId}`}
                    />
                </IKContext>
            </a>
        </div>
    )
}

export default GalleryItem;
