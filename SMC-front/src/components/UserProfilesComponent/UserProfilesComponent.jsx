import React, { useEffect } from 'react'

export default function UserProfilesComponent() {
    //login function

    const testAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY2MDk1MDU5LCJpYXQiOjE2NjYwODYwNTksImp0aSI6IjA2OWQ1OGQ4MTlmZDQ1NTdiMGNlZWI0OGQxZWY0Yzg0IiwidXNlcl9pZCI6NX0.9_QlmgFXDTJYpXFUiln_buFWQwW2VPMbquriIPmTBcY'
function getUserProfiles(accessToken) {
    return fetch('http://127.0.0.1:8000/profile-owner/profiles3', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':accessToken
        },
        // body: JSON.stringify({'email':'email', 'password': 'password'})
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}
    useEffect(()=> {
        console.log("user profile useeffect")
        
        const getUserProfileTest = async e=> {
            console.log("funstion")
            const myTestData = await getUserProfiles(testAccessToken)
            console.log(myTestData)
        }

        getUserProfileTest()
        
    },[])



  return (
    <div>UserProfilesComponent</div>
  )
}
