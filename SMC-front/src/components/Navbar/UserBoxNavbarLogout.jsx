import React from 'react'

import { Link } from 'react-router-dom';
import {Button }  from '@mui/material'
import { useNavigate } from "react-router-dom";

function UserBoxNavbarLogout() {

    // 👇️ navigate to /
    const navigate = useNavigate();

    const navigateLogin = () => {           
    navigate('login/');          
            }; 
    const navigateRegister = () => {           
        navigate('register/');          
                };
  return (
    <>
        <div style={{
            display:"flex"
        }}>
            <div style={{
                padding:"5px"
            }}>
                <Button variant="contained" onClick={()=>navigateLogin()}>                
                        Login            
                </Button> 
            </div>
            <div style={{
                padding:"5px"
            }}>
                <Button variant="contained" onClick={()=>navigateRegister()}>
                    Register
                </Button> 
            </div>
        </div>
    </>
  )
}

export default UserBoxNavbarLogout