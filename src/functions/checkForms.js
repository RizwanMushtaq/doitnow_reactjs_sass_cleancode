const Forms = {}

Forms.checkLoginFormInputs = () => {
    console.log('In checkLoginFormInputs Function')
    if(document.querySelector('#LoginFormUserInput').value === ''){
        document.querySelector('#LoginFormUserInput').parentElement.style.border = '2px solid red'
    }
    if(document.querySelector('#LoginFormPasswordInput').value === ''){
        document.querySelector('#LoginFormPasswordInput').parentElement.style.border = '2px solid red'
    }
    if(document.querySelector('#LoginFormUserInput').value !== ''){
        document.querySelector('#LoginFormUserInput').parentElement.style.border = 'none'
    }
    if(document.querySelector('#LoginFormPasswordInput').value !== ''){
        document.querySelector('#LoginFormPasswordInput').parentElement.style.border = 'none'
    }
    if(document.querySelector('#LoginFormUserInput').value === '' || document.querySelector('#LoginFormPasswordInput').value === ''){
        return false
    }
    return true
}

Forms.checkRegistrationFormInputs = () => {
    console.log('In checkRegistrationFormInputs Function')
    if(document.querySelector('#RegistrationFormUserInput').value === ''){
        document.querySelector('#RegistrationFormUserInput').parentElement.style.border = '2px solid red'
    }
    if(document.querySelector('#RegistrationFormEMailInput').value === ''){
        document.querySelector('#RegistrationFormEMailInput').parentElement.style.border = '2px solid red'
    }
    if(document.querySelector('#RegistrationFormPasswordInput').value === ''){
        document.querySelector('#RegistrationFormPasswordInput').parentElement.style.border = '2px solid red'
    }
    if(document.querySelector('#RegistrationFormUserInput').value !== ''){
        document.querySelector('#RegistrationFormUserInput').parentElement.style.border = 'none'
    }
    if(document.querySelector('#RegistrationFormEMailInput').value !== ''){
        document.querySelector('#RegistrationFormEMailInput').parentElement.style.border = 'none'
    }
    if(document.querySelector('#RegistrationFormPasswordInput').value !== ''){
        document.querySelector('#RegistrationFormPasswordInput').parentElement.style.border = 'none'
    }
    if(document.querySelector('#RegistrationFormUserInput').value === '' || document.querySelector('#RegistrationFormEMailInput').value === '' || document.querySelector('#RegistrationFormPasswordInput').value === ''){
        return false
    }

    return true
}

Forms.enterUserinDB = async () => {
    console.log('In enterUserinDB Function')
    let user = document.querySelector('#RegistrationFormUserInput').value
    let email = document.querySelector('#RegistrationFormEMailInput').value
    let password = document.querySelector('#RegistrationFormPasswordInput').value
    
    let response = await fetch('http://localhost:8090/users', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username":user,
                        "email":email,
                        "password":password
                    })
                })
    let data = await response.text()
    console.log('data is = ' + data)
    return data
    
    // .then( (response) => {
    //     return response.text()
    // })
    // .then( (data) => {
    //     // console.log(data)
    //     // if(data === '01'){
    //     //     alert('User Registration Successful')
    //     //     document.querySelector('#RegistrationFormUserInput').value = ''
    //     //     document.querySelector('#RegistrationFormEMailInput').value = ''
    //     //     document.querySelector('#RegistrationFormPasswordInput').value = ''
    //     // }else if(data === '02'){
    //     //     alert('User Name Not Available')
    //     // }
    //     return data
    // })
}

Forms.verifyUser = async () => {
    console.log('In verifyUser Function')
    let user = document.querySelector('#LoginFormUserInput').value
    let password = document.querySelector('#LoginFormPasswordInput').value
    
    let response = await fetch('http://localhost:8090/users/verify', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "username":user,
                        "password":password
                    })
                })
    console.log("Actual response from backend")
    console.log(response)
    let data = await response.text()
    console.log('data is = ' + data)
    return data
}

export default Forms