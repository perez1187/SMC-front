import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { InputAdornment, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';

// local
import { auth } from '../../services/user-services'

// using context
import {useAuth} from '../../hooks/useAuth'

function Navbar() {
    //how to fetch data from backend
    // useEffect(()=> {
    //     const getData = async () => {
    //         await fetch('http://127.0.0.1:8000/profile-owner/profiles3/')
    //         .then(resp => resp.json())
    //         .then( data => {
    //             console.log(data)
    //         })
    //     }
    //     getData();
    // }, [])

    // useStates for login
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // useStates for context
    const {authData, setAuth} =useAuth()

    // function for login
    const handleSubmit = async e => {
      e.preventDefault() // we are not going to refresh the page
      
      // we can use shortcur if key and value is the same{username,  password}
      const data = await auth( {'email':username, 'password': password}) 
      // console.log(data)



      // we get back email and token from api and set as context
      setAuth(data)
    }

  return (
    <div>
      {/* this below will show auth data form context */}
      {/* if there are no authData, show login/pass form, if there are, show email*/}
      
      {!authData ? 

        <form onSubmit={handleSubmit}>
          <TextField
            id="input-with-icon-textfield"
            label="Login"
            onChange={ e => setUsername(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircleIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <TextField
            id="input-password"
            label="Password"
            onChange={ e => setPassword(e.target.value)}
            type="password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
          <Button variant="outlined" type='submit'>Login</Button>
        </form>
      
      :
   
      <p>{authData.email}</p>   
    }

    </div>
  )
}

export default Navbar