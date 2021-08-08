import React from 'react'
import Style  from '../scss/AppPage.module.scss'

import Header from './AppPageComponents/Header'
import Data from './AppPageComponents/Data'

import Background from './AppPageComponents/Background'


export default function AppPage({username, password}) {

    console.log('In AppPage Comonent   ' + username)

    return (
        <div className={Style.container}>
            <div className={Style.innerContainer}>
                <Background />
                <div className={Style.HeaderComponentContainer}>
                    <Header username={username} />
                </div>
                <div className={Style.BodyComponentsContainer}>
                    <Data />
                </div>
            </div>
        </div>
    )
}


