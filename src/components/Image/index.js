import React from 'react'

import s from './index.module.css'

export default function Image(props) {
    return (
        <img src={props.src} alt={props.alt} className={s.default} style={props.style} />
    )
}