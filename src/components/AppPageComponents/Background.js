import React from 'react'
import Style  from '../../scss/AppPageComponents/Background.module.scss'

import BackgroundImage from '../../images/todolist.jpg'

export default function Background() {
    return (
        <div className={Style.background}>
            <img src={BackgroundImage} alt='background img'></img>
        </div>
    )
}


