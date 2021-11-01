export const isLoginFormEmpty = () => {
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
        return true
    }else {
        return false
    }
}

export const isRegistrationFormEmpty = () => {
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
        return true
    } else{
        return false
    }
}