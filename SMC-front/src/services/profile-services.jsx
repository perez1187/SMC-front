

export function fetchUserProfiles(accessToken) {
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


//create new profile function
export function CreateNewProfile(accessToken,data) {
    return fetch('http://127.0.0.1:8000/profile-owner/create/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization':accessToken
        },
        body: JSON.stringify(data)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}    