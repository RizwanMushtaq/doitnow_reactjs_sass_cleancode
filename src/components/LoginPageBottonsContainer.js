import React from 'react'
import Style  from '../scss/LoginPageBottonsContainer.module.scss'

export default function LoginPageBottonsContainer({showLoginFormHandler, showRegistrationFormHandler, loginBottonUnderline, registrationBottonUnderline}) {
    
    let loginBottonUnderline01
    let registrationBottonUnderline01
    if(loginBottonUnderline){
        loginBottonUnderline01 = <div className={Style.loginButtonContainerUnderline}></div>
        registrationBottonUnderline01 = ''
    }else if(registrationBottonUnderline){
        loginBottonUnderline01 = ''
        registrationBottonUnderline01 = <div className={Style.registrationButtonContainerUnderline}></div>
    }
    
    return (
        <div className={Style.buttonsContainer}>
            <div className={Style.loginButtonContainer}>
                <button onClick={showLoginFormHandler}>Login</button>
                {loginBottonUnderline01}
            </div>
            <div className={Style.registrationButtonContainer}>
                <button onClick={showRegistrationFormHandler}>Registration</button>
                {registrationBottonUnderline01}
            </div>
        </div>
    )
}


