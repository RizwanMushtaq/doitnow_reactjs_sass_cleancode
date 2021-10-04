import React, {useState} from 'react'
import WelcomePage from './components/WelcomePage'
import LoginPage from './components/LoginPage'
import AppPage from './components/AppPage'
import './scss/App.scss'

import Forms from './functions/checkForms'

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
  const showAppPage = (e) => {
    console.log('In showAppPageFunction')
    e.preventDefault()
    if(Forms.checkLoginFormInputs()){
      let username = document.querySelector('#LoginFormUserInput').value
      let password = document.querySelector('#LoginFormPasswordInput').value
      setUsername(username)
      setPassword(password)

      const callVerifyUserFunction = async () => {
        try{
          let user = document.querySelector('#LoginFormUserInput').value
          let password = document.querySelector('#LoginFormPasswordInput').value
          
          //Request to authenticate User at Login Request
          let response = await fetch('http://localhost:8090/users/verify', {
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
            
            //Request to get Todos list for this user
            // let responseTodos = await fetch('http://localhost:8090/todos/read', {
            //               method: 'POST',
            //               headers: {
            //                   'Accept': 'application/json',
            //                   'Content-Type': 'application/json',
            //                   'Authorization': bearerToken 
            //               }
            //           })
            // console.log("Actual response from backend of todos List Request")
            // console.log(responseTodos)
            // if(responseTodos.status === 200){
            //   let todoList = await responseTodos.json()
            //   console.log(todoList)
            // } else{
            //   console.log('authorization to user failed')
            // }

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
  
      callVerifyUserFunction()
      console.log('waiting')

    } else{
      console.log('Please enter values in required field')
    }
  }

  //function to call, when user click Register button in registration form
  const registerUser = (e) => {
    console.log('In Register User Function')
    e.preventDefault()
    if(Forms.checkRegistrationFormInputs()){

      console.log('All inputs are entered')
      const callRegisterUserFunction = async () => {
        try{
          let registrationResponse =  await Forms.enterUserinDB()
          console.log(registrationResponse)
          if(registrationResponse === '01'){
              alert('User Registration Successful')
              document.querySelector('#RegistrationFormUserInput').value = ''
              document.querySelector('#RegistrationFormEMailInput').value = ''
              document.querySelector('#RegistrationFormPasswordInput').value = ''
          }else if(registrationResponse === '02'){
              alert('User Name Not Available')
          }
        } catch(e){
          alert(e)
          console.log(e)
        }
      }

      callRegisterUserFunction()
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
        <LoginPage showAppPageHandler={showAppPage} registerUserHandler={registerUser} />
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

