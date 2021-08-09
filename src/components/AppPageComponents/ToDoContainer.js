import React, {useState, useEffect} from 'react'
import Style  from '../../scss/AppPageComponents/ToDoContainer.module.scss'

import ListContainer from './ListContainer'
import WeatherContainer from './WeatherContainer'

export default function ToDoContainer() {

    let [contentVisible, setContentVisible] = useState('listContainer')
    let showListContainer = () => {
        setContentVisible('listContainer')
    }
    let showWeatherContainer = () => {
        setContentVisible('weatherContainer')
    }
    
    let ViewerContent = <ListContainer />
    if(contentVisible === 'listContainer'){
        ViewerContent = <ListContainer />
    } else if(contentVisible === 'weatherContainer'){
        ViewerContent = <WeatherContainer />
    }
    useEffect( ()=>{
        if(contentVisible === 'listContainer'){
            document.querySelector('#todoListButton').style.backgroundColor = '#ffff'
            document.querySelector('#weatherButton').style.backgroundColor = '#C9FFF0'
            // ViewerContent = <ListContainer />
        } else if(contentVisible === 'weatherContainer'){
            // ViewerContent = <WeatherContainer />
            document.querySelector('#todoListButton').style.backgroundColor = '#C9FFF0'
            document.querySelector('#weatherButton').style.backgroundColor = '#ffff'
        }
    }, [contentVisible])


    return (
        <div className={Style.container}>
            <div className={Style.dateHeader}>Day Month Year</div>
            <div className={Style.menuHeader}>
                <div onClick={showListContainer} id='todoListButton'>ToDo List</div>
                <div onClick={showWeatherContainer} id='weatherButton'>Weather</div>
            </div>
            <div className={Style.contentContainer}>{ViewerContent}</div>
        </div>
    )
}


