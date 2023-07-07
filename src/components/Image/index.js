import React from 'react'

import s from './index.module.css'

export default function Image(props) {
    const { src, alt, style, width = '100%', centered = false} = props
    const imageStyle = { ...style, width }

    return (
        <div className={centered ? s.centered : ''}>
            <img src={src} alt={alt} className={s.default} style={imageStyle} />
        </div>
    )
}