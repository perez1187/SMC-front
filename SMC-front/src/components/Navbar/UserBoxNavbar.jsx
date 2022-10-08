import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// using context
import {useAuth} from '../../hooks/useAuth'

//mui
import MailIcon from '@mui/icons-material/Mail';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { AppBar, styled, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem,Button }  from '@mui/material'

function UserBoxNavbar() {

      // menu r
    const [open, setOpen] = useState(false)

    const UserBoxFullScreen = styled(Box)(({ theme}) => ({
        display: "none",
        gap: "20px",
        alignItems:"center",
        //backgroundColor: "white",
        // over sm show, under hide
        [theme.breakpoints.up("sm")] : {
            display: "flex"
        }
    }))
    const UserBoxMobile = styled(Box)(({ theme}) => ({
        display: "flex",
        gap: "20px",
        alignItems:"center",
        [theme.breakpoints.up("sm")] : {
            display: "none"
        }
        //backgroundColor: "white",
    }))

      // useStates for context
  const {authData, setAuth} =useAuth()

  return (
    <>
        {!authData ? 
            <Button variant="contained">
                <Link to="login/">
                    Login
                </Link>
            </Button> 
            :
            <> 
            <UserBoxFullScreen>
                {/* <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon />
                </Badge> */}
                <Avatar 
                    sx={{ width: 30, height: 30 }}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    onClick= {e=> setOpen(true)} // open menu when clicked
                />
                <Typography 
                    variant='span'
                    onClick= {e=> setOpen(true)} // open menu when clicked
                >            
                    {!authData ? 
                        <Button variant="contained">Login</Button> 
                        :
                        <p>{authData.email}</p>
                    }
                </Typography>
            </UserBoxFullScreen>
            
            <UserBoxMobile onClick= {e=> setOpen(true)}> 
                <Avatar 
                    sx={{ width: 30, height: 30 }}
                    src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    
                />
                <Typography variant='span'>            
                    {!authData ? 
                        <p> login</p>  
                        :
                        <p>{authData.email}</p>
                    }
                </Typography>
            </UserBoxMobile>
            </>
}
                        {/* Autocomplete for searching menu */}
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open} //open is depending on state open
                onClose= {(e)=>setOpen(false)} // when you clck somewhere, when close
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
          {/* <div>
        <div> 
          <h1> navbar</h1>
        </div>
        <div>
          {!authData ? 
            <p> login</p>  
            :
            <p>{authData.email}</p>
          }
        </div>
      
 
     </div> */}
    </>
  )
}

export default UserBoxNavbar