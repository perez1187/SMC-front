import React from 'react'
import { InputAdornment, TextField, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useState } from 'react';


// local
import { auth } from '../../services/user-services'

// using context
import {useAuth} from '../../hooks/useAuth'


import { useNavigate } from "react-router-dom";


// this function is called on loginf page

function LoginFront() {

    const navigate = useNavigate();

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
        const [loginNotSuccess, setLoginNotSuccess]= useState(false)
    
        // useStates for context
        const {authData, setAuth} =useAuth()
    
        // function for login
        const handleSubmit = async e => {
          e.preventDefault() // we are not going to refresh the page
          
          // we can use shortcur if key and value is the same{username,  password}
          const data = await auth( {'email':username, 'password': password}) 
          console.log(data.email)
            
          // 👇️ navigate to /
          const navigateHome = async () => {           
                navigate('/');          
                      };    
    
          // we get back email and token from api in data
          // and if we have data.emai (login succes) we set as context and move to landing page
          try {
            if (data.email) {
                await setAuth(data)
                await navigateHome() 
            }

            } catch (e) {
            console.log('Error')
            
            // tutaj dac use state
            }
            setLoginNotSuccess(true) 
        // redirect 
 
          
          

        }
  return (
    <div style={{
        backgroundColor: "white", 
        display: 'flex',  
        justifyContent:'center', 
        alignItems:'center',
        padding:"5px"
    }}>
        
            {/* this below will show auth data form context */}
            {/* authData is user from App.jsx */}
            {/* if there are no authData, show login/pass form, if there are, show email*/}
        {!authData ? 
            <Box >  
                
                <form onSubmit={handleSubmit}>
                    <Box 
                        sx = {{
                            display: "flex",
                            alignItems:"center",
                            padding:"10px"

                        }}> 
                        <TextField
                            id="input-with-icon-textfield"
                            label="Login"
                            variant="standard" 
                                                            
                            
                            onChange={ e => setUsername(e.target.value)}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircleIcon />
                                </InputAdornment>
                            ),
                            }}
                            
                        />
                    </Box>
                    <Box                         
                        sx = {{
                            display: "flex",
                            alignItems:"center",
                            padding:"10px"

                        }}>  
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
                    </Box>
                    
                    <Box
                        sx = {{
                            display: "flex",
                            alignItems:"center",
                            padding:"10px"

                        }}>  
                        <Button variant="outlined" type='submit'>Login</Button>
                        {loginNotSuccess &&
                        <p style={{
                            color: "red"
                        }} > wrong email or password</p>
                    }
                    </Box>
                </form>
            </Box>

            :

        <p>{authData.email}</p>   
        }

    </div>
  )
}

export default LoginFront