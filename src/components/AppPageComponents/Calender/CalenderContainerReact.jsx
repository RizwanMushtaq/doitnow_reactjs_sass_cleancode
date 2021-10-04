import React, {useState} from 'react'
import { takeMonth } from './calender'
import { addMonths, subMonths, format, isSameMonth, isSameDay, setDate } from 'date-fns'

import Style from './CalenderContainerReact.module.scss'

import arrowiconlogo from '../../../images/Pfeilrechts.svg'

export default function CalenderContainerReact({handleDaysDivClickevent, selectedDay, selectedMonth, selectedYear}) {
    
    console.log('In CalenderContainerReact')
    // console.log(selectedDay)
    let selectedMonthActual = selectedMonth-1;
    let selectedDayDate = setDate(new Date(selectedYear, selectedMonthActual, selectedDay), selectedDay)
    // console.log(selectedDayDate)

    let [myDate, setMyDate] = useState(new Date())
    let data = takeMonth(myDate)()

    //Vaiable to hold today date to use in this component for logic
    let todayDate = new Date()
    //Variable to hold selected Day by user
    // let [selectedDay, setSelectedDay] = useState(new Date())

    //Variable to store all div elements to show in HTML
    let showData = data.map( (week) =>
        week.map( (day) => {
            if (!isSameMonth(day, myDate)){
                return <div className={Style.otherDays} key={day}>{format(day, 'dd')}</div>
            } else {
                if(isSameDay(day, todayDate)){
                    if(isSameDay(day, selectedDayDate )){
                        return <div key={day} className={`${Style.activeDays} ${Style.todayDate} ${Style.selectedDay}`} onClick={handleDaysDivClickevent} >{format(day, 'dd')}</div>
                    } else{
                        return <div key={day} className={`${Style.todayDate} ${Style.activeDays}`} onClick={handleDaysDivClickevent} >{format(day, 'dd')}</div>
                    }
                } else {
                    if(isSameDay(day, selectedDayDate )){
                        return <div key={day} className={`${Style.activeDays} ${Style.selectedDay}`} onClick={handleDaysDivClickevent} >{format(day, 'dd')}</div>
                    } else {
                        return <div key={day} className={Style.activeDays} onClick={handleDaysDivClickevent}>{format(day, 'dd')}</div>
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


