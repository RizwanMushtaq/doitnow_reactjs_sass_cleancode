import React from 'react'
import Style  from '../../scss/AppPageComponents/Data.module.scss'

export default function Data(props) {
    return (
        <div className={Style.container}>
            {props.children}
        </div>
    )
}


