import React,{useState} from 'react'
import Style  from '../scss/AppPage.module.scss'

import Header from './AppPageComponents/Header'
import Data from './AppPageComponents/Data'

import CalenderContainer from './AppPageComponents/CalenderContainer'
import ToDoContainer from './AppPageComponents/ToDoContainer'

import Background from './AppPageComponents/Background'
import AddToDoItemDialog from './AppPageComponents/AddToDoItemDialog'

export default function AppPage({username, password, handleLogoutButtonClick}) {

    console.log('In AppPage Component   ' + username)

    let [dateForViewer, setDateForViewer] = useState(new Date())
    let todayDate = String(dateForViewer.getDate()).padStart(2,'0')
    let thismonth = String(dateForViewer.getMonth()+1).padStart(2,'0')

    let [selectedDay, setSelectedDay] = useState(todayDate)
    let [selectedMonth, setSelectedMonth] = useState(thismonth)
    let [selectedYear, setSelectedYear] = useState(dateForViewer.getFullYear())

    let handleDaysDivClickevent = (event) => {
        event.target.classList.forEach(element => {
            if(element === 'next-date' || element === 'prev-date'){
                console.log(element)
                return
            } else {
                let monthDays = document.querySelector('#daysDiv')
                monthDays.childNodes.forEach(element =>{
                    element.classList.remove('selectedDay')
                })

                console.log(event.target.classList)
                event.target.classList.add('selectedDay')

                let selectedDay = String(event.target.innerHTML).padStart(2,'0')
                setSelectedDay(selectedDay)
                
                console.log(event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML)
                
                let selectedDateString = event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML
                let selectedDateArray = selectedDateString.split(' ')
                console.log(selectedDateArray)

                if(selectedDateArray[0] === 'Januar'){
                    setSelectedMonth('01')
                }else if(selectedDateArray[0] === 'Februar'){
                    setSelectedMonth('02')
                }else if(selectedDateArray[0] === 'März'){
                    setSelectedMonth('03')
                }else if(selectedDateArray[0] === 'April'){
                    setSelectedMonth('04')
                }else if(selectedDateArray[0] === 'Mai'){
                    setSelectedMonth('05')
                }else if(selectedDateArray[0] === 'Juni'){
                    setSelectedMonth('06')
                }else if(selectedDateArray[0] === 'Juli'){
                    setSelectedMonth('07')
                }else if(selectedDateArray[0] === 'August'){
                    setSelectedMonth('08')
                }else if(selectedDateArray[0] === 'September'){
                    setSelectedMonth('09')
                }else if(selectedDateArray[0] === 'Oktober'){
                    setSelectedMonth('10')
                }else if(selectedDateArray[0] === 'November'){
                    setSelectedMonth('11')
                }else if(selectedDateArray[0] === 'Dezember'){
                    setSelectedMonth('12')
                }

                setSelectedYear(selectedDateArray[1])

                console.log(selectedDay)
                console.log(selectedMonth)
                console.log(selectedYear)
            }
        })
    }

    let [showAddToDoItemDialog, setShowAddToDoItemDialog] = useState(false)
    let handleAddTodoIconClick = () => {
        console.log("In handleAddTodoIconClick function")
        setShowAddToDoItemDialog(true)
    }
    let handleCancelButtonClick = () => {
        console.log("In handleCancelButtonClick function")
        setShowAddToDoItemDialog(false)
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
                        <CalenderContainer handleDaysDivClickevent = {handleDaysDivClickevent}/>
                        <ToDoContainer selectedDay={selectedDay} selectedMonth={selectedMonth} selectedYear={selectedYear} handleAddTodoIconClick={handleAddTodoIconClick} />
                    </Data>
                </div>
                {showAddToDoItemDialog && 
                    <AddToDoItemDialog
                        selectedDay={selectedDay} selectedMonth={selectedMonth} selectedYear={selectedYear} 
                        handleCancelButtonClick={handleCancelButtonClick} 
                    />}
            </div>
        </div>
    )
}


