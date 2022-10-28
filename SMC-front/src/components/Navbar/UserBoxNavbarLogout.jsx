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
                <Button 
                    variant="contained" 
                    size="medium"
                    onClick={()=>navigateLogin()}
                    style={{
                        borderRadius:80,
                        fontSize:15,
                        fontWeight:600,
                        fontFamily:'Work Sans',
                        color:"#FFFFFF",
                        textTransform:"none"
                    }}
                >                
                        Login            
                </Button> 
            </div>
            <div style={{
                padding:"5px"
            }}>
                <Button 
                    variant="contained" 
                    size="medium"
                    onClick={()=>navigateRegister()}
                    style={{
                        borderRadius:80,
                        fontSize:15,
                        fontWeight:600,
                        fontFamily:'Work Sans',
                        color:"#FFFFFF",
                        textTransform:"none"
                    }}                    
                >
                    Register
                </Button> 
            </div>
        </div>
    </>
  )
}

export default UserBoxNavbarLogout