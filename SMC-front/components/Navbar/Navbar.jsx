import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { InputAdornment, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';

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

    // function for login
    const handleSubmit = async e => {
      e.preventDefault() // we are not going to refresh the page
      console.log(username, password)
    }

  return (
    <div>
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


    </div>
  )
}

export default Navbar