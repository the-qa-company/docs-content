import React from 'react'

import s from './index.module.css'

import BrowserOnly from '@docusaurus/BrowserOnly';

export default function Image(props) {
    const { src, alt, style, width = '100%', centered = false} = props
    const imageStyle = { ...style, width }

    return (
        <BrowserOnly>{() =>
            <div className={centered ? s.centered : ''}>
                <img src={src} alt={alt} className={s.default} style={imageStyle} />
            </div>
        }
        </BrowserOnly>
    )
}