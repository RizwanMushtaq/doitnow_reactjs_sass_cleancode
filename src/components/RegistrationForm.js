import React from 'react'
import Style  from '../scss/RegistrationForm.module.scss'

import UserLogo from '../images/Benutzer.svg'
import PasswordLogo from '../images/Passwortschloss.svg'
import EmailLogo from '../images/Mail.svg'

export default function RegistrationForm() {
    return (
        <div className={Style.Container}>
            <form>
                <div className={Style.InputContainer}>
                    <div className={Style.InputContainerB}>
                        <label>User:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={UserLogo}></img>
                            </div>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className={Style.InputContainerB}>
                        <label>Email:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={EmailLogo}></img>
                            </div>
                            <input type='text'></input>
                        </div>
                    </div>
                    <div className={Style.InputContainerB}>
                        <label>Password:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={PasswordLogo}></img>
                            </div>
                            <input type='password'></input>
                        </div>
                    </div>
                </div>
                <div className={Style.buttonContainer}>
                    <button>Registration</button>
                </div>
            </form>
        </div>
    )
}


