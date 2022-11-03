import React from 'react'

// using context
import {useAuth} from '../../hooks/useAuth'

// services
import { CreateNewProfile } from '../../services/profile-services'
import { refreshAccessToken } from '../../services/user-services'

function CreateNewProfileComponent() {

    // useStates for context
    const {authData,setAuth} =useAuth()
    // console.log(authData.id)




    // function for xreate new profile
    const handleSubmit = async e => {
        //e.preventDefault() // we are not going to refresh the page
        
        if (authData) {
             
            const newAccessToken = await refreshAccessToken(authData.tokens.refresh)
            // const newAccessToken = await refreshAccessToken(test_wrong_token)
            console.log(newAccessToken.access)
            
            // if refresh token is not valid, we logout the user
            if (newAccessToken.detail) {

                setAuth(null)
                navigateHome()

            // else, we fetch user profiles    
            } else {
                    const data = await CreateNewProfile( newAccessToken.access, {'user':authData.id}) 
                    console.log(data)
                }

            }

        else {
            console.log("you need to login")
            // we need to send info to user that he needs to login
        }


    
    // 👇️ navigate to /
    // const navigateHome = async () => {           
    //     navigate('/');          
    //             };


    // we get back email and token from api in data
    // and if we have data.emai (login succes) we set as context and move to landing page
    // varables for loggind
    // try {
    //     if (data.email) {
    //         if (data.email == 'This field may not be blank.') {
    //             // console.log("chujjjj nie pusty")
    //         } else if (data.password == 'This field may not be blank.'){
                
    //         }
    //         else if (data.email == 'Enter a valid email address.'){
                
    //         }
    //         else {
    //             await setAuth(data)
    //             await navigateHome() 
    //         }

    //     }

    //     } catch (e) {
    //     console.log('Error')
        
    //     // tutaj dac use state
    //     }
    //     setLoginNotSuccess(true)           
    
    }


  return (
    <div>
        CreateNewProfileComponent
        <button onClick={()=>handleSubmit()}> create</button>
    </div>
  )
}

export default CreateNewProfileComponent