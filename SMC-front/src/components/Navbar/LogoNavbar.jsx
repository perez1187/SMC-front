import React from 'react'
import { useNavigate } from "react-router-dom";

//mui
import { Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';

function LogoNavbar() {
    
    
    // 👇️ navigate to /
    const navigate = useNavigate();

    const navigateLandingPage = () => {           
        navigate('/');          
                };
  return (
              
    <div onClick={() => navigateLandingPage()}> 
        <Typography 
            variant='h6'                   
            sx={{

            display:{
                xs:"none",
                sm:"block"
            }
        }}>
            Sharp Mind Club
        </Typography> 
        
        <PetsIcon             
            sx={{
            // display on difrent resolutions
            //here on mobile
                display:{
                    xs:"block",
                    sm:"none"
            }}}/>
    </div>
  )
}

export default LogoNavbar