export function logWithDebug(message){
    if(localStorage.getItem('debug')) console.log(message)
}