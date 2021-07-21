import React from 'react'
import Style  from '../scss/LoginFom.module.scss'

import UserLogo from '../images/Benutzer.svg'
import PasswordLogo from '../images/Passwortschloss.svg'

export default function LoginForm({showForgotPasswordFormHandler, showAppPageHandler}) {
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
                            <input type='text' id='LoginFormUserInput' ></input>
                        </div>
                    </div>
                    <div className={Style.InputContainerB}>
                        <label>Password:</label>
                        <div className={Style.InputContainerInner}>
                            <div>
                                <img src={PasswordLogo}></img>
                            </div>
                            <input type='password' id='LoginFormPasswordInput'></input>
                        </div>
                        <p className={Style.forgotPasswordLabel} onClick={showForgotPasswordFormHandler}>Forgot password?</p>
                    </div>
                </div>
                <div className={Style.buttonContainer}>
                    <button onClick={showAppPageHandler}>Login</button>
                </div>
            </form>
        </div>
    )
}


