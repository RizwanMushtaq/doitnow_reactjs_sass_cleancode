const Forms = {}

Forms.checkLoginFormInputs = () => {
    console.log('In checkLoginFormInputs Function')
    if(document.querySelector('#LoginFormUserInput').value === ''){
        document.querySelector('#LoginFormUserInput').parentElement.style.border = '2px solid red'
        document.querySelector('#LoginFormPasswordInput').parentElement.style.border = 'none'
        return false
    } else if(document.querySelector('#LoginFormPasswordInput').value === ''){
        document.querySelector('#LoginFormUserInput').parentElement.style.border = 'none'
        document.querySelector('#LoginFormPasswordInput').parentElement.style.border = '2px solid red'
        return false
    }
    document.querySelector('#LoginFormUserInput').parentElement.style.border = 'none'
    document.querySelector('#LoginFormPasswordInput').parentElement.style.border = 'none'
    return true
}

Forms.verifyUser = () => {
    console.log('In verifyUser Function')

    // return true
}

export default Forms