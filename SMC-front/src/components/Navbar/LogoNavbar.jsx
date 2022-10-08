import React from 'react'

//mui
import { Typography } from '@mui/material'
import PetsIcon from '@mui/icons-material/Pets';

function LogoNavbar() {
  return (
              
    <> 
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
    </>
  )
}

export default LogoNavbar