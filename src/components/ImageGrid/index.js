import React from 'react'

import s from './index.module.css'


export default function ImageGrid({images, templateColumns = 'repeat(2, 1fr)', gap = '10px', noTransformation = false, columnHeight = undefined, gridMaxWidth = '100%'}) {

    const gridStyle = {
        gridTemplateColumns: templateColumns,
        gridGap: gap,
        gridAutoRows: columnHeight || 'auto',
        maxWidth: gridMaxWidth,
    }

    const handleClick = (onClick) => {
        if (onClick) {
            onClick()
        }
    }

    return (
        <div className={s.grid} style={gridStyle}>
            {images.map((image, index) => (
                <div
                    className={noTransformation  ? '' : s.imageWrapper}
                    key={index}
                >
                    <img
                        src={image.src}
                        className={noTransformation ? s.basicImage : s.image}
                        alt={image.alt || `Image ${index}`}
                        onClick={() => handleClick(image.onClick)}
                        style={{ cursor: image.onClick ? 'pointer' : 'default' }}
                    />
                    <div className={image.caption || image.description ? s.descContainer : ''}>
                        {image.caption}
                        {image.description}
                    </div>
                </div>
            ))}
        </div>
    )
}