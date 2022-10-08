import { useState } from 'react'
import './App.css'

import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';

import {AuthenticationProvider} from './hooks/useAuth'

function App() {

  // we check auth data from local storage and put it as an object to user
  const user = JSON.parse(localStorage.getItem('smc-user') )

  return (
    // we give user, user is sendingg to Authentication provider, and then is set as authDate (useState)
    <AuthenticationProvider user = {user}>  {/* everything below are children */}
       <Box> 
        <h1> chuh </h1>
        <Navbar/>
      </Box>
    </AuthenticationProvider>
  )
}

export default App
