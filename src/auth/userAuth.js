import APIEndPoints from './../config/apiEndPoints'
import { logWithDebug } from './../utils/logHandling'

export const isUserValid = async () => {
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
        logWithDebug("Actual response from backend")
        logWithDebug(response)

        if(response.status === 200) {
        let data = await response.json()
        logWithDebug("Payload Data is : ")
        logWithDebug(data)

        const bearerToken = 'Bearer ' + data.accessToken
        localStorage.setItem("BearerToken", bearerToken)
        localStorage.setItem("userName", data.userName)
        localStorage.setItem("userID", data.userID)
        localStorage.setItem("userEMail", data.userEMail)

        //Setting AppState to App Viewer
        logWithDebug("Valid User")
        return true

        } else if(response.status === 400){
        logWithDebug("Incorrect User name or Password")
        alert("Incorrect User name or Password")
        return false
        } else {
        logWithDebug("Unknown Error")
        alert("Something went Wrong on Backend Side")
        return false
        }
    } catch(e){
        alert(e)
        const error = new Error('Incorrect password')
        throw error
    } 
}

export const registerUser = async () => {

    let user = document.querySelector('#RegistrationFormUserInput').value
    let email = document.querySelector('#RegistrationFormEMailInput').value
    let password = document.querySelector('#RegistrationFormPasswordInput').value

    try{
        // let registrationResponse =  await Forms.enterUserinDB()
        // logWithDebug(registrationResponse)
        let response = await fetch(APIEndPoints.userRegistration, {
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
          logWithDebug("Actual response from backend")
          logWithDebug(response)
          if(response.status === 200) {
            let data = await response.json()
            logWithDebug("Payload Data is : ")
            logWithDebug(data)

            if(data.result === 'success'){
                alert('User Registration Successful')
                document.querySelector('#RegistrationFormUserInput').value = ''
                document.querySelector('#RegistrationFormEMailInput').value = ''
                document.querySelector('#RegistrationFormPasswordInput').value = ''
                return true
            }else if(data.result === 'duplicate'){
                alert('User Name Not Available')
                return false
            }

          } else {
            logWithDebug(response)
            return false
          }
    } catch(e){
        alert(e)
        const error = new Error('Incorrect password')
        throw error
    }

}