import APIEndPoints from "../config/apiEndPoints"
import { logWithDebug } from "../utils/logHandling"

export const deleteTodoItem = async (event) => {
    const bearerToken = localStorage.getItem('BearerToken')
    const itemId = event.target.id
    
    return fetch( APIEndPoints.deleteTodoItem, {
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
}

export const isTodoItemDeleted = async (response) => {
    if(response.status === 200){
        let data = await response.json()
        logWithDebug(data)
        if(data.result === 'success'){
            logWithDebug('data updated successfully')
            return true
        }
    } else{
        const error = new Error(response)
        throw error
    }
}

export const toggleDoneState = async (event) => {
    let bearerToken = localStorage.getItem('BearerToken')
    let state = event.target.checked
    let itemId = event.target.id

    return fetch( APIEndPoints.updateDoneState , {
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
}

export const isDoneStateUpdated = async (response) => {
    if(response.status === 200){
        const data = await response.json()
        logWithDebug(data)
        if(data.result === 'success'){
            logWithDebug('data updated successfully')
            return true
        }
    } else{
        const error = new Error(response)
        throw error
    }
}