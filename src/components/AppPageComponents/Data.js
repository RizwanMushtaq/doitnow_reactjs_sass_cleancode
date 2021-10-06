import React from 'react'
import Style  from './Data.module.scss'

export default function Data(props) {
    return (
        <div className={Style.container}>
            {props.children}
        </div>
    )
}


