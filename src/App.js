import React, {useState} from 'react'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import AppPage from './components/AppPage'
import './scss/App.scss'

import APIEndPoints from './config/apiEndPoints'
import Forms from './form_handling_functions/checkForms'

export default function App() {
  
  console.log("Inside App component to track rendering of component")

  //appState Hook to track (WelcomePage, LoginPage, AppPage) in Viewer
  const [appState, setAppState] = useState('WelcomePage')
  //logInState Hook to track (WelcomePage, LoginPage, AppPage) in Viewer
  // const [logInState, setLogInState] = useState(false)
  //Variables to store username And password
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')
  
  //function to call, when user click Jetz Loslegen button in Welcoma Page
  const showLoginPage = () => {
    console.log('In showLoginPageFunction')
    setAppState('LoginPage')
  }
  
  //function to call, when user click login button in login form
  const userLoginRequestHandler = (e) => {
    console.log('In userLoginRequestHandler Function')
    e.preventDefault()
    if(Forms.checkLoginFormInputs()){
      let username = document.querySelector('#LoginFormUserInput').value
      let password = document.querySelector('#LoginFormPasswordInput').value
      setUsername(username)
      setPassword(password)

      const VerifyUser = async () => {
        try{
          let user = document.querySelector('#LoginFormUserInput').value
          let password = document.querySelector('#LoginFormPasswordInput').value
          
          //Request to authenticate User at Login Request
          let response = await fetch( APIEndPoints.userLogin, {
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

          if(response.status === 200) {
            let data = await response.json()
            console.log("Payload Data is : ")
            console.log(data)

            const bearerToken = 'Bearer ' + data.accessToken
            localStorage.setItem("BearerToken", bearerToken)
            localStorage.setItem("userName", data.userName)
            localStorage.setItem("userID", data.userID)
            localStorage.setItem("userEMail", data.userEMail)

            //Setting AppState to App Viewer
            console.log("Valid User")
            setAppState('AppPage')

          } else if(response.status === 400){
            console.log("Incorrect User name or Password")
            alert("Incorrect User name or Password")
          } else {
            console.log("Unknown Error")
            alert("Something went Wrong on Backend Side")
          }

        } catch(e){
          console.log('In catch error block')
          alert(e)
          console.log(e)
        }
      }
  
      VerifyUser()
      console.log('waiting')

    } else{
      console.log('Please enter values in required field')
    }
  }

  //function to call, when user click Register button in registration form
  const userRegistrationRequestHandler = (e) => {
    console.log('In userRegistrationRequestHandler Function')
    e.preventDefault()
    
    if(Forms.checkRegistrationFormInputs()){
      console.log('All inputs are entered')
      let user = document.querySelector('#RegistrationFormUserInput').value
      let email = document.querySelector('#RegistrationFormEMailInput').value
      let password = document.querySelector('#RegistrationFormPasswordInput').value

      const registerUser = async () => {
        try{
          // let registrationResponse =  await Forms.enterUserinDB()
          // console.log(registrationResponse)
          let response = await fetch('http://localhost:8090/users/registerUser', {
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
            console.log("Actual response from backend")
            console.log(response)
            if(response.status === 200) {
              let data = await response.json()
              console.log("Payload Data is : ")
              console.log(data)

              if(data.result === 'success'){
                  alert('User Registration Successful')
                  document.querySelector('#RegistrationFormUserInput').value = ''
                  document.querySelector('#RegistrationFormEMailInput').value = ''
                  document.querySelector('#RegistrationFormPasswordInput').value = ''
              }else if(data.result === 'duplicate'){
                  alert('User Name Not Available')
              }

            } else {
              console.log(response)
            }
        } catch(e){
          alert(e)
          console.log(e)
        }
      }

      registerUser()
      console.log('waiting')

    } else{
      console.log('Please enter values in required field')
    }
  }
  
  //function to call when user click on logout button in AppPage Viewer
  const handleLogoutButtonClick = () => {
    console.log("In handleLogoutButtonClick function")
    console.log(appState)
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

