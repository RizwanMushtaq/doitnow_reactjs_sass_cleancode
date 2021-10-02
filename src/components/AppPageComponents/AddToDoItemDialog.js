import React, {useCallback} from 'react'
import Style  from './AddToDoItemDialog.module.scss'

export default function AddToDoItemDialog({
    selectedDay, 
    selectedMonth, 
    selectedYear,
    handleCancelButtonClick}) {
    
    let selectedDate = selectedDay + '.' + selectedMonth + '.' + selectedYear
    
    const autoFocus = useCallback(el => el ? el.focus() : null, [])

    return (
        <div className={Style.container}>
            <div></div>
            <div className={Style.dialogBox}>
                <div className={Style.dateLabel}>{selectedDate}</div>
                <textarea className={Style.textArea} rows="3" ref={autoFocus} placeholder="Write your Todo Item.."/>
                <div className={Style.buttonContainer}>
                    <button onClick={handleCancelButtonClick}>Cancel</button>
                    <button>Save</button>
                </div>
            </div> 
        </div>
    )
}


