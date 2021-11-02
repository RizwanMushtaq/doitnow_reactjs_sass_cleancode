export function logWithDebug(message){
    if(localStorage.getItem('debug') === true) console.log(message)
}