import React from 'react'
import Style  from '../scss/AppPage.module.scss'

import Header from './AppPageComponents/Header'
import Data from './AppPageComponents/Data'

import CalenderContainer from './AppPageComponents/CalenderContainer'
import ToDoContainer from './AppPageComponents/ToDoContainer'

import Background from './AppPageComponents/Background'


export default function AppPage({username, password, handleLogoutButtonClick}) {

    console.log('In AppPage Component   ' + username)

    return (
        <div className={Style.container}>
            <div className={Style.innerContainer}>
                <Background />
                <div className={Style.HeaderComponentContainer}>
                    <Header username={username} handleLogoutButtonClick={handleLogoutButtonClick} />
                </div>
                <div className={Style.BodyComponentsContainer}>
                    <Data>
                        <CalenderContainer />
                        <ToDoContainer />
                    </Data>
                </div>
            </div>
        </div>
    )
}


