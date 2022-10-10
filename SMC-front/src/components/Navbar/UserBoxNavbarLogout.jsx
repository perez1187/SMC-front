import React from 'react'

import { Link } from 'react-router-dom';
import {Button }  from '@mui/material'

function UserBoxNavbarLogout() {
  return (
    <>
        <Button variant="contained">
            <Link to="login/">
                Login
            </Link>
        </Button> 
    </>
  )
}

export default UserBoxNavbarLogout