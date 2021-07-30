import React from 'react'
import Style  from '../scss/RegistrationForm.module.scss'

import UserLogo from '../images/Benutzer.svg'
import PasswordLogo from '../images/Passwortschloss.svg'
import EmailLogo from '../images/Mail.svg'

export default function RegistrationForm({registerUserHandler}) {
    return (
        <div className={Style.Container}>
            <form>
                <div className={Style.InputContainer}>
                    <div className={Style.InputContainerB}>
                        <label>User:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={UserLogo} alt='UserLogo'></img>
                            </div>
                            <input type='text' id='RegistrationFormUserInput'></input>
                        </div>
                    </div>
                    <div className={Style.InputContainerB}>
                        <label>Email:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={EmailLogo} alt='EmailLogo'></img>
                            </div>
                            <input type='text' id='RegistrationFormEMailInput'></input>
                        </div>
                    </div>
                    <div className={Style.InputContainerB}>
                        <label>Password:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={PasswordLogo} alt='PasswordLogo'></img>
                            </div>
                            <input type='password' id='RegistrationFormPasswordInput'></input>
                        </div>
                    </div>
                </div>
                <div className={Style.buttonContainer}>
                    <button onClick={registerUserHandler}>Register</button>
                </div>
            </form>
        </div>
    )
}


