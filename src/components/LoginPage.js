import React, {useState} from 'react'
import Style  from '../scss/LoginPage.module.scss'
import BackgroundImage from '../images/todolistshort.jpg'
import CheckedBox from '../images/checked-box.png'

import LoginPageBottonsContainer from './LoginPageBottonsContainer'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import ForgotPasswordForm from './ForgotPasswordForm'

export default function LoginPage({showAppPageHandler, registerUserHandler}) {

    const [form, setForm] = useState('loginForm')
    const [loginBottonUnderline, setLoginBottonUnderline] = useState(true)
    const [registrationBottonUnderline, setRegistrationBottonUnderline] = useState(false)
    
    const showForgotPasswordForm = () => {
        setForm('forgotPasswordForm')
    }
    const showLoginForm = () => {
        setForm('loginForm')
        setLoginBottonUnderline(true)
        setRegistrationBottonUnderline(false)
    }
    const showRegistrationForm = () => {
        setForm('registrationForm')
        setLoginBottonUnderline(false)
        setRegistrationBottonUnderline(true)
    }

    let bottonsContainer
    let formVisible
    
    if(form === 'loginForm'){
        bottonsContainer = <LoginPageBottonsContainer  
                                showLoginFormHandler={showLoginForm} 
                                showRegistrationFormHandler={showRegistrationForm}
                                loginBottonUnderline = {loginBottonUnderline}
                                registrationBottonUnderline = {registrationBottonUnderline}
                                
                                />
        formVisible = <LoginForm showForgotPasswordFormHandler = {showForgotPasswordForm} showAppPageHandler = {showAppPageHandler}/>

    } else if(form === 'registrationForm'){
        
        bottonsContainer = <LoginPageBottonsContainer  
                                showLoginFormHandler={showLoginForm} 
                                showRegistrationFormHandler={showRegistrationForm}
                                loginBottonUnderline = {loginBottonUnderline}
                                registrationBottonUnderline = {registrationBottonUnderline} 
                                />
        formVisible = <RegistrationForm registerUserHandler={registerUserHandler} />

    } else if(form === 'forgotPasswordForm'){
        bottonsContainer = ''
        formVisible = <ForgotPasswordForm showLoginFormHandler = {showLoginForm} />
    }

    return (
        <div className={Style.container}>
            <div className={Style.upperContainer}>
                <div className={Style.imgContainer}>
                    <img src={BackgroundImage} alt= 'WelocmePage'></img>
                </div>
                <div className={Style.headingContainer}>
                    <div>
                        <div>Do it</div> 
                        <div className={Style.headingLogoContainer}>
                            <img src={CheckedBox} alt= 'CheckedBox'></img>
                        </div>
                        <div>Now</div>
                    </div>
                </div>
            </div>
            <div className={Style.lowerContainer}>
                <div className={Style.lowerContainerInner}>
                    {bottonsContainer}
                    <div className={Style.formsContainer}>
                        {formVisible}
                    </div>
                </div>
            </div>
        </div>
    )
}


