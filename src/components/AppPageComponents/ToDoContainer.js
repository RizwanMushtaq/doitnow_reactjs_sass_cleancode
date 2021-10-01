import React from 'react'
import Style  from '../../scss/AppPageComponents/ToDoContainer.module.scss'

import plusIcon from '../../images/plus-svgrepo-com.svg'
import deleteIcon from '../../images/Papierkorb.svg'

export default function ToDoContainer({selectedDay, selectedMonth, selectedYear, handleAddTodoIconClick}) {

    let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear

    

    return (
        <div className={Style.container}>
            <div className={Style.Header}>
                <div>{selectedDate}</div>
                <div className={Style.addToDoDiv} onClick={handleAddTodoIconClick}>
                    <img src={plusIcon} alt='plusIcon'></img>
                </div>
            </div>
            
            <div className={Style.toDoListContainer}>
                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>Atemgggggggggggggggggg g1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>itemgggggg gggggggggggg ggggggggg ggggggggg gggggg ggggggggggggg1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>itemggggggggg ggggggggg 1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>itemgggggggggggggggggg gggggggggggggggggg ggggggggggggggggggg1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>itemgggggggggggggggggg gggggggggggggggggg ggggggggggggggggggg1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

                <div className={Style.todo_ListItem}>
                    <div className={Style.todo_checkboxDiv}>
                        <input type="checkbox" className={Style.todoCheckboxInput} />
                    </div>
                    <div className={Style.todo_item}>
                        <div>itemgggggggggggggggggg gggggggggggggggggg ggggggggggggggggggg1</div>
                    </div>
                    <div className={Style.todo_deleteDiv}>
                        <img src={deleteIcon} alt="deleteIcon" />
                    </div>
                </div>

            </div>
            
        </div>
    )
}


