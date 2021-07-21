import React, {useState} from 'react'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import AppPage from './components/AppPage'
import './scss/App.scss'

import Forms from './functions/checkForms'

export default function App() {
  
  const [appState, setAppState] = useState('WelcomePage')

  const showLoginPage = () => {
    console.log('In showLoginPageFunction')
    setAppState('LoginPage')
  }
  const showAppPage = (e) => {
    console.log('In showAppPageFunction')
    e.preventDefault()
    if(Forms.checkLoginFormInputs()){
      if(Forms.verifyUser()){
        setAppState('AppPage')
      }else{
        console.log('Incorrect User or Password')
      }
    } else{
      console.log('Please enter values in required field')
    }
  }
  
  if(appState === 'WelcomePage'){
    return (
      <div className="App">
        <WelcomePage showLoginPageHandler = {showLoginPage} />
      </div>
    )
  }else if(appState === 'LoginPage'){
    return (
      <div className="App">
        <LoginPage showAppPageHandler = {showAppPage} />
      </div>
    )
  }else if(appState === 'AppPage'){
    return (
      <div className="App">
        <AppPage />
      </div>
    )
  }
  
}

