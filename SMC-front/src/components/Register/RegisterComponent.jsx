import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";

// MUI
import { InputAdornment, TextField, Button, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

// local
import { auth } from '../../services/user-services'

// using context
import {useAuth} from '../../hooks/useAuth'

function RegisterComponent() {

    const navigate = useNavigate();

        // useStates for login
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
        const [confrimPassword, setConfrimPassword] = useState('')
        const [registerNotSuccess, setRgisterNotSuccess]= useState(false)
    
        // useStates for context
        const {authData, setAuth} =useAuth()

        //function for checking password and confirmpassword
        const passMatch = () => {
            return password === confrimPassword
        }      
    
        // function for register new account
        const handleSubmit = async e => {
          e.preventDefault() // we are not going to refresh the page

          if (passMatch()) {
            console.log('all good')
          } else {
            console.log('pass dont match')
          }
          // we can use shortcur if key and value is the same{username,  password}
        //   const data = await auth( {'email':username, 'password': password, 'confirmPassword':confrimPassword}) 
        const data = {'email':username, 'password': password, 'confirmPassword':confrimPassword}
        console.log(data)  

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
                            id="email-textfield"
                            label="Email"
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
                        <TextField
                            id="input-confirm-password"
                            label="Confirm password"
                            onChange={ e => setConfrimPassword(e.target.value)}
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
                        {registerNotSuccess &&
                        <p style={{
                            color: "red"
                        }} > wrong email or password</p>
                    }
                    </Box>
                </form>
            </Box>

            :

        <p style={{
            color:"black"
        }}>
           You are login as: {authData.email}
        </p>   
        }

    </div>
  )
}

export default RegisterComponent