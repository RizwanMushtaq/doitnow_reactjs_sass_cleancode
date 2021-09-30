import React, {useState, useEffect} from 'react'
import Style  from '../../scss/AppPageComponents/CalenderContainer.module.scss'
import '../../scss/AppPageComponents/CalenderContainer.scss'

import arrowiconlogo from '../../images/Pfeilrechts.svg'


const CalenderContainer = React.memo( ({handleDaysDivClickevent}) => {    
    console.log("In CalenderContainer Component")

    // const date = new Date()
    let [date, setDate] = useState(new Date())

    const renderKalender = () => {
        date.setDate(1)
        // console.log(date.getDay())  //how many day of previous month we need to show

        const monthDays = document.querySelector('#daysDiv')

        const lastDay = new Date(date.getFullYear(), date.getMonth()+1, 0).getDate() //to get last day of current month means to get total number of days in current month

        const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate()
        // console.log(prevLastDay)

        const firstDayIndex = date.getDay()
        const lastDayIndex = new Date(date.getFullYear(), date.getMonth()+1, 0).getDay()
        // console.log(lastDayIndex)
        
        const nextDays = 7 - lastDayIndex - 1

        const months = [
            "Januar",
            "Februar",
            "März",
            "April",
            "Mai",
            "Juni",
            "Juli",
            "August",
            "September",
            "Oktober",
            "November",
            "Dezember"
        ]

        document.querySelector('#monthHeaderDiv').innerHTML = months[date.getMonth()]+ ' ' + date.getFullYear()

        let days = "";
        
        for(let x=firstDayIndex; x>0; x--){
            days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
        }

        for(let i = 1; i<=lastDay; i++){
            if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()){
                days += `<div class="today selectedDay validDay">${i}</div>`
                // setSelectedDay(i)
            }else {
                days += `<div class="validDay">${i}</div>`
            } 
        }
        
        for(let j=1; j<= nextDays; j++){
            days += `<div class="next-date">${j}</div>`
        }

        // console.log(days)
        monthDays.innerHTML = days

    }

    let handlePreviousMonth = ()=>{
        date.setMonth(date.getMonth()-1)
        renderKalender()
    }
    let handleNextMonth = ()=>{
        date.setMonth(date.getMonth()+1)
        renderKalender()
    }

    useEffect( ()=> {
        renderKalender()
    }, [])
    
    return (
        <div className={Style.container}>
            <div className={Style.monthDiv}>
                <div className={Style.previousMonth}>
                    <img src={arrowiconlogo} alt='previous' id='previousMonth' onClick={handlePreviousMonth}></img>
                </div>
                <div id='monthHeaderDiv'>month year</div>
                <div className={Style.nextMonth}>
                    <img src={arrowiconlogo} alt='previous' id='nextMonth' onClick={handleNextMonth}></img>
                </div>
            </div>
            <div className={Style.weekDiv}>
                <div>SO.</div>
                <div>MO.</div>
                <div>DI.</div>
                <div>MI.</div>
                <div>DO.</div>
                <div>FR.</div>
                <div>SA.</div>
            </div>
            <div className={Style.daysDiv} id={'daysDiv'} onClick={handleDaysDivClickevent}>
                <div className={Style.dayDiv}>
                    <div>31</div>
                    <div className={Style.dateWithToDo}>
                        <div></div>
                    </div>
                </div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
            </div>
        </div>
    )
})


export default CalenderContainer