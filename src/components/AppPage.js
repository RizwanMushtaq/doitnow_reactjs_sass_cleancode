import React from 'react'
import Style  from '../scss/AppPage.module.scss'

import Header from './AppPageComponents/Header'
import Calender from './AppPageComponents/Calender'
import ToDoContainer from './AppPageComponents/ToDoContainer'

import Background from './AppPageComponents/Background'

export default function AppPage() {
    return (
        <div className={Style.container}>
            <div className={Style.innerContainer}>
                <Background></Background>
            </div>
        </div>
    )
}


