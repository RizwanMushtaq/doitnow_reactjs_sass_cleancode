import React from 'react'
import Style  from './Header.module.scss'

export default function header({username, handleLogoutButtonClick}) {

    return (
        <div className={Style.container}>
            <button className={Style.userNameDiv}>Welcome {username} !</button>
            <button className={Style.logoutButton} onClick={handleLogoutButtonClick}>Logout</button>
        </div>
    )
}


