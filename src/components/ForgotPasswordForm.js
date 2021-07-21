import React from 'react'
import Style  from '../scss/ForgotPasswordForm.module.scss'

import UserLogo from '../images/Benutzer.svg'
import PasswordLogo from '../images/Passwortschloss.svg'

export default function ForgotPasswordForm({showLoginFormHandler}) {
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
                        <label>New Password:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={PasswordLogo}></img>
                            </div>
                            <input type='password'></input>
                        </div>
                    </div>
                </div>
                <div className={Style.buttonContainer}>
                    <button>Submit</button>
                    <button onClick={showLoginFormHandler}>Back to Login</button>
                </div>
                
            </form>
        </div>
    )
}


