import React,{useState} from 'react'
import Style  from '../scss/AppPage.module.scss'

import Header from './AppPageComponents/Header'
import Data from './AppPageComponents/Data'

// import CalenderContainer from './AppPageComponents/CalenderContainer'
// import CalenderContainerNew from './AppPageComponents/CalenderContainerNew'
import CalenderContainerReact from './AppPageComponents/Calender/CalenderContainerReact'
import ToDoContainer from './AppPageComponents/ToDoContainer'

import Background from './AppPageComponents/Background'
import AddToDoItemDialog from './AppPageComponents/AddToDoItemDialog'

import dateForViewer from '../components/GlobalVariable_DateForViewer'

export default function AppPage({username, password, handleLogoutButtonClick}) {

    console.log('In AppPage Component   ' + username)
    
    let todayDate = String(dateForViewer.getDate()).padStart(2,'0')
    let thismonth = String(dateForViewer.getMonth()+1).padStart(2,'0')

    let [selectedDay, setSelectedDay] = useState(todayDate)
    let [selectedMonth, setSelectedMonth] = useState(thismonth)
    let [selectedYear, setSelectedYear] = useState(dateForViewer.getFullYear())

    let [updateToDoContainer, setUpdateToDoContainer] = useState(false)

    let handleDaysDivClickevent = (event) => {
        console.log('In handleDaysDivClickevent function')
        
        event.target.classList.forEach(element => {
            if(element === 'otherDays'){
                console.log(element)
                return
            } else {
                let monthDays = document.querySelector('#daysDiv')
                monthDays.childNodes.forEach(element =>{
                    element.classList.remove('selectedDay')
                })

                console.log(event.target.classList)
                event.target.classList.add('selectedDay')

                let selectedDay = String(event.target.firstChild.innerHTML)
                setSelectedDay(selectedDay)
                
                console.log(event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML)
                
                let selectedDateString = event.target.parentElement.previousSibling.previousSibling.childNodes[1].innerHTML
                let selectedDateArray = selectedDateString.split(' ')
                console.log(selectedDateArray)

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

    //Function to handle cancel button click in AddToDoItem Dialog
    let handleCancelButtonClick = () => {
        console.log("In handleCancelButtonClick function")
        setShowAddToDoItemDialog(false)
    }
    //Function to handle save button click in AddToDoItem Dialog
    let handleSaveButtonClick = async () => {
        console.log("In handleSaveButtonClick function")
        console.log(document.querySelector('#toDoTextArea').value.trim().length)
        if(document.querySelector('#toDoTextArea').value.trim().length){
            console.log('input field is OK')

            let bearerToken = localStorage.getItem('BearerToken')
            let userID = localStorage.getItem('userID')
            let toDoItem = document.querySelector('#toDoTextArea').value
            let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
            let done = false
            console.log(toDoItem)
            console.log(userID)
            console.log(selectedDate)

            try{
                //Request to write todo Item in database
                let response = await fetch('http://localhost:8090/todos/write', {
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
                console.log("Actual response from backend")
                console.log(response)

                if(response.status === 200){
                    let data = await response.json()
                    console.log(data)
                    if(data.result === 'success'){
                        
                        setShowAddToDoItemDialog(false)
                        console.log('data inserted successfully')
                        //making useState hook to toggel to update viewer each time
                        if(updateToDoContainer === true){
                            setUpdateToDoContainer(false)
                        }else{
                            setUpdateToDoContainer(true)
                        }
                    }
                } else{
                    alert(response)
                    console.log(response)
                }

            } catch(e) {
                console.log('In catch error block')
                alert(e)
                console.log(e)
            }
            

            console.log("waiting ....")
            
        } else {
            console.log('input field empty')
            alert('input field is empty')
        }
        
    }
    //Function to handle when user click on check box to set item to done or undone state in ToDoContainer Component
    let handleCheckboxClick = async (event) => {
        console.log("In handleCheckboxClick function")
        console.log(event.target.id)
        console.log(event.target.checked)

        let bearerToken = localStorage.getItem('BearerToken')
        let state = event.target.checked
        let itemId = event.target.id

        try{
            //Request to write todo Item in database
            let response = await fetch('http://localhost:8090/todos/updateDoneState', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': bearerToken
                },
                body: JSON.stringify({
                    "state": state,
                    "itemId": itemId
                })
            })
            console.log("Actual response from backend")
            console.log(response)

            if(response.status === 200){
                let data = await response.json()
                console.log(data)
                if(data.result === 'success'){
                    
                    
                    console.log('data updated successfully')
                    //making useState hook to toggel to update viewer each time
                    if(updateToDoContainer === true){
                        setUpdateToDoContainer(false)
                    }else{
                        setUpdateToDoContainer(true)
                    }
                }
            } else{
                alert(response)
                console.log(response)
            }

        } catch(e) {
            console.log('In catch error block')
            alert(e)
            console.log(e)
        }

    }
    //Function to handle when user click on delete icon
    let handleDeleteIconClick = async (event) => {
        console.log("In handleDeleteIconClick function")
        console.log(event.target.id)

        let bearerToken = localStorage.getItem('BearerToken')
        let itemId = event.target.id

        try{
            //Request to write todo Item in database
            let response = await fetch('http://localhost:8090/todos/deleteItem', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': bearerToken
                },
                body: JSON.stringify({
                    "itemId": itemId
                })
            })
            console.log("Actual response from backend")
            console.log(response)

            if(response.status === 200){
                let data = await response.json()
                console.log(data)
                if(data.result === 'success'){
                    
                    
                    console.log('data updated successfully')
                    //making useState hook to toggel to update viewer each time
                    if(updateToDoContainer === true){
                        setUpdateToDoContainer(false)
                    }else{
                        setUpdateToDoContainer(true)
                    }
                }
            } else{
                alert(response)
                console.log(response)
            }

        } catch(e) {
            console.log('In catch error block')
            alert(e)
            console.log(e)
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


