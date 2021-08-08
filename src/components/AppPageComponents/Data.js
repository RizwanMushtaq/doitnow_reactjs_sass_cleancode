import React from 'react'
import Style  from '../../scss/AppPageComponents/Data.module.scss'

import CalenderContainer from './CalenderContainer'
import ToDoContainer from './ToDoContainer'

export default function Data() {
    return (
        <div className={Style.container}>
            <CalenderContainer />
            <ToDoContainer />
        </div>
    )
}


