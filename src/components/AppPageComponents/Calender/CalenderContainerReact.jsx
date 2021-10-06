import React, {useState, useEffect} from 'react'
import { takeMonth } from './calender'
import { addMonths, subMonths, format, isSameMonth, isSameDay, setDate } from 'date-fns'

import Style from './CalenderContainerReact.module.scss'
import APIEndPoints from '../../../config/apiEndPoints'

import arrowiconlogo from '../../../images/Pfeilrechts.svg'

export default function CalenderContainerReact(
    {
        handleDaysDivClickevent, 
        selectedDay, 
        selectedMonth, 
        selectedYear,
        updateToDoContainer
    }) {
    
    console.log('In CalenderContainerReact Component')
    let selectedMonthActual = selectedMonth-1;
    let selectedDayDate = setDate(new Date(selectedYear, selectedMonthActual, selectedDay), selectedDay)
    
    let [myDate, setMyDate] = useState(new Date())
    let data = takeMonth(myDate)()

    //Vaiable to hold today date to use in this component for logic
    let todayDate = new Date()
    let [dateList, setDateList] = useState([])

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    //Variable to store all div elements to show in HTML
    let showData = data.map( (week) => 
        week.map( (day) => {
            if (!isSameMonth(day, myDate)){
                return <div className={Style.otherDays} key={day}>
                            <div>{format(day, 'dd')}</div>
                            <div>
                                {
                                    dateList.map( (item) => {
                                        if(isSameDay(day, item)){
                                            return <div key={day} className={Style.dotDiv}></div>
                                        }
                                        return null 
                                    })
                                }
                            </div>
                        </div>
            } else {
                if(isSameDay(day, todayDate)){
                    if(isSameDay(day, selectedDayDate )){
                        return <div key={day} className={`${Style.activeDays} ${Style.todayDate} ${Style.selectedDay}`} onClick={handleDaysDivClickevent} >
                                    <div>{format(day, 'dd')}</div>
                                    <div>
                                        {
                                            dateList.map( (item) => {
                                                if(isSameDay(day, item)){
                                                    return <div key={day} className={Style.dotDiv}></div>
                                                }
                                                return null  
                                            })
                                        }
                                    </div>
                                </div>
                    } else{
                        return <div key={day} className={`${Style.todayDate} ${Style.activeDays}`} onClick={handleDaysDivClickevent} >
                                    <div>{format(day, 'dd')}</div>
                                    <div>
                                        {
                                            dateList.map( (item) => {
                                                if(isSameDay(day, item)){
                                                    return <div key={day} className={Style.dotDiv}></div>
                                                }
                                                return null  
                                            })
                                        }
                                    </div>
                                </div>
                    }
                } else {
                    if(isSameDay(day, selectedDayDate )){
                        return <div key={day} className={`${Style.activeDays} ${Style.selectedDay}`} onClick={handleDaysDivClickevent} >
                                    <div>{format(day, 'dd')}</div>
                                    <div>
                                        {
                                            dateList.map( (item) => {
                                                if(isSameDay(day, item)){
                                                    return <div key={day} className={Style.dotDiv}></div>
                                                }
                                                return null  
                                            })
                                        }
                                    </div>
                                </div>
                    } else {
                        return <div key={day} className={Style.activeDays} onClick={handleDaysDivClickevent}>
                                    <div>{format(day, 'dd')}</div>
                                    <div>
                                        {
                                            dateList.map( (item) => {
                                                if(isSameDay(day, item)){
                                                    return <div key={day} className={Style.dotDiv}></div>
                                                }
                                                return null  
                                            })
                                        }
                                    </div>
                                </div>
                    }
                } 
            } 
                    
        })
    )
    
    //Function to handle previous month icon click
    let handlePreviousMonth = ()=>{
        console.log('In handlePreviousMonth')
        setMyDate(subMonths(myDate, 1))
    }
    //Function to handle next month icon click
    let handleNextMonth = ()=>{
        console.log('In handleNextMonth function')
        setMyDate(addMonths(myDate, 1))
    }
    
    

    useEffect( () => {
        console.log('In CalenderContainerReact Component useEffect Hook')
        let bearerToken = localStorage.getItem('BearerToken')
        let userID = localStorage.getItem('userID')
        console.log(userID)
        
        async function fetchData(){
            try{
                //Request to read todo Item from database
                let response = await fetch( APIEndPoints.getAllTodosForUser, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': bearerToken
                    },
                    body: JSON.stringify({
                        "userID": userID
                    })
                })
                console.log("Actual response from backend")
                console.log(response)
    
                if(response.status === 200){
                    let data = await response.json()
                    console.log(data)
                    if(JSON.stringify(data) === JSON.stringify({})){
                        console.log('data is null')
                    } else {
                        console.log('we got some data')
                        // Getting actual array of dates for which we have todos for specific user
                        let datesArray = []
                        setDateList( dateList => [])

                        data.ToDoList.map((item) => {
                            datesArray.push(item.Date)
                            return null
                        })
                        console.log(datesArray)

                        let unique = datesArray.filter(onlyUnique)
                        console.log(unique)

                        for(let i=0; i< unique.length; i++){
                            let dateArray = unique[i].split('.')
                            let date = new Date(dateArray[2], dateArray[1]-1, dateArray[0])
                            // console.log(date)
                            setDateList(dateList => [...dateList, date])
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
        
        fetchData()
        console.log("waiting ....")
    }, [updateToDoContainer])

    return (
        <div className={Style.container}>
            <div className={Style.monthDiv}>
                <div className={Style.previousMonth}>
                    <img src={arrowiconlogo} alt='previous' id='previousMonth' onClick={handlePreviousMonth}></img>
                </div>
                <div id='monthHeaderDiv'>
                    {format(myDate, 'MMMM')} {format(myDate, 'yyyy')}
                </div>
                <div className={Style.nextMonth}>
                    <img src={arrowiconlogo} alt='previous' id='nextMonth' onClick={handleNextMonth}></img>
                </div>
            </div>
            <div className={Style.weekDiv}>
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
            </div>
            <div className={Style.daysDiv} id={'daysDiv'}>
                {showData}
            </div>
        </div>
    )
}


