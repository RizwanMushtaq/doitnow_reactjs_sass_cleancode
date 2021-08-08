import React from 'react'
import Style  from '../../scss/AppPageComponents/Header.module.scss'

export default function header({username}) {
    return (
        <div className={Style.container}>
            <button className={Style.userNameDiv}>Welcome {username} !</button>
        </div>
    )
}


