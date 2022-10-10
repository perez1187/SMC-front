import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

// using context
import {useAuth} from '../../hooks/useAuth'


import UserBoxNavbarLogout from './UserBoxNavbarLogout';
import UserBoxNavbarLogin from './UserBoxNavbarLogin';

function UserBoxNavbar() {

      // menu r
    const [open, setOpen] = useState(false)

      // useStates for context
  const {authData, setAuth} =useAuth()

  return (
    <>
        {!authData ? 
            <UserBoxNavbarLogout />
            :
            <UserBoxNavbarLogin />
        }
    </>
  )
}

export default UserBoxNavbar