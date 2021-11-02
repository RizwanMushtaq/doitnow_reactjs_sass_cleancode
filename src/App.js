import React, {useState} from 'react'
import './style/App.scss'
import { isLoginFormEmpty, isRegistrationFormEmpty } from './helpers/checkForms'
import { logWithDebug } from './utils/logHandling'
import { isUserValid, registerUser } from './auth/userAuth'

import WelcomePage from './pages/WelcomePage'
import LoginPage from './pages/LoginPage'
import AppPage from './pages/AppPage'

export default function App() {
  logWithDebug("Inside App component to track rendering of component")

  const [appState, setAppState] = useState('WelcomePage') //appState Hook to track (WelcomePage, LoginPage, AppPage) in Viewer
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  
  const showLoginPage = () => {
    logWithDebug('In showLoginPageFunction')
    setAppState('LoginPage')
  }
  
  const userLoginRequestHandler = async (e) => {
    logWithDebug('In userLoginRequestHandler Function')
    e.preventDefault()

    if(isLoginFormEmpty()){
      logWithDebug('Please enter values in required field')
      return
    }

    let username = document.querySelector('#LoginFormUserInput').value
    let password = document.querySelector('#LoginFormPasswordInput').value
    setUsername(username)
    setPassword(password)
    
    let result = await isUserValid()
    if(!result){
      return 
    } else {
      setAppState('AppPage')
    }

  }

  const userRegistrationRequestHandler = async (e) => {
    logWithDebug('In userRegistrationRequestHandler Function')
    e.preventDefault()
    
    if(isRegistrationFormEmpty()){
      logWithDebug('Please enter values in required field')
      return
    }

    await registerUser()
  
  }
  
  const handleLogoutButtonClick = () => {
    logWithDebug("In handleLogoutButtonClick function")
    logWithDebug(appState)
    setAppState('WelcomePage')
  }

  //Return block is decided on the basis of appState Hook
  if(appState === 'WelcomePage'){
    return (
      <div className="App">
        <WelcomePage showLoginPageHandler = {showLoginPage} />
      </div>
    )
  }else if(appState === 'LoginPage'){
    return (
      <div className="App">
        <LoginPage userLoginRequestHandler={userLoginRequestHandler} userRegistrationRequestHandler={userRegistrationRequestHandler} />
      </div>
    )
  }else if(appState === 'AppPage'){
    return (
      <div className="App">
        <AppPage username={username} password={password} handleLogoutButtonClick={handleLogoutButtonClick}/>
      </div>
    )
  }
  
}

