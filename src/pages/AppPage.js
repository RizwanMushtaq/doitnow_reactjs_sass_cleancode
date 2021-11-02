import React,{useState} from 'react'
import Style  from './AppPage.module.scss'

import APIEndPoints from '../config/apiEndPoints'
import { logWithDebug } from './../utils/logHandling'
import { logError } from '../utils/errorHandling'
import {deleteTodoItem, isTodoItemDeleted, toggleDoneState, isDoneStateUpdated} from './../helpers/appPageLogic'

import Header from '../components/AppPageComponents/Header'
import Data from '../components/AppPageComponents/Data'
import CalenderContainerReact from '../components/AppPageComponents/Calender/CalenderContainerReact'
import ToDoContainer from '../components/AppPageComponents/ToDoContainer'
import Background from '../components/AppPageComponents/Background'
import AddToDoItemDialog from '../components/AppPageComponents/AddToDoItemDialog'
import dateForViewer from '../components/GlobalVariable_DateForViewer'

export default function AppPage({username, password, handleLogoutButtonClick}) {

    logWithDebug('In AppPage Component   ' + username)
    
    let todayDate = String(dateForViewer.getDate()).padStart(2,'0')
    let thismonth = String(dateForViewer.getMonth()+1).padStart(2,'0')

    let [selectedDay, setSelectedDay] = useState(todayDate)
    let [selectedMonth, setSelectedMonth] = useState(thismonth)
    let [selectedYear, setSelectedYear] = useState(dateForViewer.getFullYear())

    let [updateToDoContainer, setUpdateToDoContainer] = useState(false)

    let handleDaysDivClickevent = (event) => {
        logWithDebug('In handleDaysDivClickevent function')
        
        event.target.classList.forEach(element => {
            if(element === 'otherDays'){
                logWithDebug(element)
                return
            } else {
                let monthDays = document.querySelector('#daysDiv')
                monthDays.childNodes.forEach(element =>{
                    element.classList.remove('selectedDay')
                })

                logWithDebug(event.target.classList)
                event.target.classList.add('selectedDay')

                let selectedDay = String(event.target.firstChild.innerHTML)
                setSelectedDay(selectedDay)
                
                logWithDebug(event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML)
                
                let selectedDateString = event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML
                let selectedDateArray = selectedDateString.split(' ')
                logWithDebug(selectedDateArray)

                if(selectedDateArray[0] === 'January'){
                    setSelectedMonth('01')
                }else if(selectedDateArray[0] === 'February'){
                    setSelectedMonth('02')
                }else if(selectedDateArray[0] === 'March'){
                    setSelectedMonth('03')
                }else if(selectedDateArray[0] === 'April'){
                    setSelectedMonth('04')
                }else if(selectedDateArray[0] === 'May'){
                    setSelectedMonth('05')
                }else if(selectedDateArray[0] === 'June'){
                    setSelectedMonth('06')
                }else if(selectedDateArray[0] === 'July'){
                    setSelectedMonth('07')
                }else if(selectedDateArray[0] === 'August'){
                    setSelectedMonth('08')
                }else if(selectedDateArray[0] === 'September'){
                    setSelectedMonth('09')
                }else if(selectedDateArray[0] === 'October'){
                    setSelectedMonth('10')
                }else if(selectedDateArray[0] === 'November'){
                    setSelectedMonth('11')
                }else if(selectedDateArray[0] === 'December'){
                    setSelectedMonth('12')
                }

                setSelectedYear(selectedDateArray[1])

                logWithDebug(selectedDay)
                logWithDebug(selectedMonth)
                logWithDebug(selectedYear)
            }
        })
    }

    let [showAddToDoItemDialog, setShowAddToDoItemDialog] = useState(false)
    let handleAddTodoIconClick = () => {
        logWithDebug("In handleAddTodoIconClick function")
        setShowAddToDoItemDialog(true)
    }

    //Function to handle cancel button click in AddToDoItem Dialog
    let handleCancelButtonClick = () => {
        logWithDebug("In handleCancelButtonClick function")
        setShowAddToDoItemDialog(false)
    }
    //Function to handle save button click in AddToDoItem Dialog
    let handleSaveButtonClick = async () => {
        logWithDebug("In handleSaveButtonClick function")
        logWithDebug(document.querySelector('#toDoTextArea').value.trim().length)
        if(document.querySelector('#toDoTextArea').value.trim().length){
            logWithDebug('input field is OK')

            let bearerToken = localStorage.getItem('BearerToken')
            let userID = localStorage.getItem('userID')
            let toDoItem = document.querySelector('#toDoTextArea').value
            let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
            let done = false
            logWithDebug(toDoItem)
            logWithDebug(userID)
            logWithDebug(selectedDate)

            try{
                //Request to write todo Item in database
                let response = await fetch( APIEndPoints.writeTodoItem, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': bearerToken
                    },
                    body: JSON.stringify({
                        "userID": userID,
                        "toDoItem": toDoItem,
                        "selectedDate": selectedDate,
                        "done": done
                        
                    })
                })
                logWithDebug("Actual response from backend")
                logWithDebug(response)

                if(response.status === 200){
                    let data = await response.json()
                    logWithDebug(data)
                    if(data.result === 'success'){
                        
                        setShowAddToDoItemDialog(false)
                        logWithDebug('data inserted successfully')
                        //making useState hook to toggel to update viewer each time
                        if(updateToDoContainer === true){
                            setUpdateToDoContainer(false)
                        }else{
                            setUpdateToDoContainer(true)
                        }
                    }
                } else{
                    alert(response)
                    logWithDebug(response)
                }

            } catch(e) {
                logWithDebug('In catch error block')
                alert(e)
                logWithDebug(e)
            }
            

            logWithDebug("waiting ....")
            
        } else {
            logWithDebug('input field empty')
            alert('input field is empty')
        }
        
    }
   
    let handleCheckboxClick = async (event) => {
        logWithDebug("In handleCheckboxClick function")

        try{
            const response = await toggleDoneState(event) 
            logWithDebug(response)
            const result = await isDoneStateUpdated(response)

            if(result === true){
                if(updateToDoContainer === true){
                    setUpdateToDoContainer(false)
                }else{
                    setUpdateToDoContainer(true)
                }
            } else{
                logWithDebug(result)
            }
        } catch(e) {
            logError(e)
        }
    }
    
    let handleDeleteIconClick = async (event) => {
        logWithDebug("In handleDeleteIconClick function")
        
        try{
            const response = await deleteTodoItem(event)
            const result = await isTodoItemDeleted(response)
            if(result === true){
                if(updateToDoContainer === true){
                    setUpdateToDoContainer(false)
                }else{
                    setUpdateToDoContainer(true)
                }
            }
        } catch(e) {
            logError(e)
        }
    }

    return (
        <div className={Style.container}>
            <div className={Style.innerContainer}>
                <Background />
                <div className={Style.HeaderComponentContainer}>
                    <Header username={username} handleLogoutButtonClick={handleLogoutButtonClick} />
                </div>
                <div className={Style.BodyComponentsContainer}>
                    <Data>
                        <CalenderContainerReact 
                            handleDaysDivClickevent = {handleDaysDivClickevent} 
                            selectedDay={selectedDay} 
                            selectedMonth={selectedMonth} 
                            selectedYear={selectedYear}
                            updateToDoContainer = {updateToDoContainer} 
                        />
                        <ToDoContainer 
                            selectedDay={selectedDay} 
                            selectedMonth={selectedMonth} 
                            selectedYear={selectedYear} 
                            handleAddTodoIconClick={handleAddTodoIconClick}
                            handleCheckboxClick={handleCheckboxClick}
                            handleDeleteIconClick={handleDeleteIconClick} 
                            updateToDoContainer = {updateToDoContainer}
                        />
                    </Data>
                </div>
                {showAddToDoItemDialog && 
                    <AddToDoItemDialog
                        selectedDay={selectedDay} selectedMonth={selectedMonth} selectedYear={selectedYear} 
                        handleCancelButtonClick={handleCancelButtonClick}
                        handleSaveButtonClick={handleSaveButtonClick}  
                    />}
            </div>
        </div>
    )
}


