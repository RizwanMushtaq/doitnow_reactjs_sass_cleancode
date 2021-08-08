import React from 'react'
import Style  from '../../scss/AppPageComponents/CalenderContainer.module.scss'

export default function CalenderContainer() {
    return (
        <div className={Style.container}>
            <div>Month Year</div>
            <div>Woche</div>
            <div>Days</div>
        </div>
    )
}


