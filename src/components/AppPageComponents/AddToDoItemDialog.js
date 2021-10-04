import React, {useCallback} from 'react'
import Style  from './AddToDoItemDialog.module.scss'

export default function AddToDoItemDialog({
    selectedDay, 
    selectedMonth, 
    selectedYear,
    handleCancelButtonClick,
    handleSaveButtonClick}
    ) {
    
    let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
    
    //Using Call Back to set auto focus in textarea Field
    const autoFocus = useCallback(el => el ? el.focus() : null, [])

    return (
        <div className={Style.container}>
            <div></div>
            <div className={Style.dialogBox}>
                <div className={Style.dateLabel}>{selectedDate}</div>
                <textarea className={Style.textArea} id='toDoTextArea' rows="3" ref={autoFocus} placeholder="Write your Todo Item.."/>
                <div className={Style.buttonContainer}>
                    <button onClick={handleCancelButtonClick}>Cancel</button>
                    <button onClick={handleSaveButtonClick}>Save</button>
                </div>
            </div> 
        </div>
    )
}


