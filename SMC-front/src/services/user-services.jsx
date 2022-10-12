import React from 'react'

//login function
export function auth(credentials) {
    return fetch('http://127.0.0.1:8000/auth/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

//register function
export function register(userData) {
    return fetch('http://127.0.0.1:8000/auth/register/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}

//resending Activation Email
export function resendingActivationEmail(userData) {
    return fetch('http://127.0.0.1:8000/auth/resend-activation-email/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }
    ).then(resp => resp.json())
    .catch( e => {
        console.log(e)
    })
}