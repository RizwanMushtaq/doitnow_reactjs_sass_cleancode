import React, {useState, useEffect} from 'react'
import Style  from '../../scss/AppPageComponents/ToDoContainer.module.scss'

import plusIcon from '../../images/plus-svgrepo-com.svg'
import deleteIcon from '../../images/Papierkorb.svg'
// import setDate from 'date-fns/setDate'

export default function ToDoContainer({selectedDay, selectedMonth, selectedYear, handleAddTodoIconClick, updateToDoContainer, handleCheckboxClick}) {

    console.log('In ToDoContainer Component')
    let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
    let [data, setData] = useState({ ToDoList: []})
    let [isValidData, setIsValidData] = useState(false)

    useEffect(() => {
        console.log('In ToDoContainer Component useEffect Hook')
        let bearerToken = localStorage.getItem('BearerToken')
        let userID = localStorage.getItem('userID')
        let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
        console.log(userID)
        console.log(selectedDate)

        async function fetchData(){
            try{
                //Request to read todo Item from database
                let response = await fetch('http://localhost:8090/todos/read', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': bearerToken
                    },
                    body: JSON.stringify({
                        "userID": userID,
                        "selectedDate": selectedDate
                    })
                })
                console.log("Actual response from backend")
                console.log(response)
    
                if(response.status === 200){
                    let data = await response.json()
                    console.log(data)
                    if(JSON.stringify(data) === JSON.stringify({})){
                        console.log('data is null')
                        setIsValidData(false)
                    } else {
                        console.log('we got some data')
                        setData(data)
                        setIsValidData(true)
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
    
    }, [selectedDay, selectedMonth, selectedYear, updateToDoContainer])


    

    return (
        <div className={Style.container}>
            <div className={Style.Header}>
                <div>{selectedDate}</div>
                <div className={Style.addToDoDiv} onClick={handleAddTodoIconClick}>
                    <img src={plusIcon} alt='plusIcon'></img>
                </div>
            </div>
            
            <div className={Style.toDoListContainer}>
                
                {
                    isValidData &&   
                        data.ToDoList.map( (item) => {
                            return(
                            <div className={Style.todo_ListItem} key={item.Item_ID}>
                                
                                {  item.Done 
                                    ?
                                    <div className={Style.todo_checkboxDiv}>
                                        <input type="checkbox" defaultChecked className={Style.todoCheckboxInput} id={item.Item_ID} onChange={handleCheckboxClick} />
                                    </div>
                                    :
                                    <div className={Style.todo_checkboxDiv}>
                                        <input type="checkbox" className={Style.todoCheckboxInput} id={item.Item_ID} onChange={handleCheckboxClick} />
                                    </div>
                                }
                                   
                                <div className={Style.todo_item}>
                                    <div>{item.Todo}</div>
                                </div>
                                <div className={Style.todo_deleteDiv}>
                                    <img src={deleteIcon} alt="deleteIcon" />
                                </div>
                            </div>
                            )})
                }

                {
                    !isValidData && 
                        <div>No items to display</div>
                }
                

                {/* <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>Atemgggggggggggggggggg g1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div> */}

            </div>
            
        </div>
    )
}


