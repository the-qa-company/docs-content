import React from 'react'

import s from './index.module.css'


export default function ImageGrid({images}) {
    const handleClick = (onClick) => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '10px' }}>
                {images.map((image, index) => (
                    <div
                        className={s.imageWrapper}
                        key={index}
                    >
                        <img
                            src={image.src}
                            className={s.image}
                            alt={image.alt || `Image ${index}`}
                            onClick={() => handleClick(image.onClick)}
                            style={{ cursor: image.onClick ? 'pointer' : 'default' }}
                            // style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.3)', borderRadius: '5px', cursor: image.onClick ? 'pointer' : 'default' }}
                        />
                        {image.caption && <div className={s.caption}>{image.caption}</div>}
                    </div>
                ))}
        </div>
    )
}