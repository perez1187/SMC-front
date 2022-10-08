import { useState } from 'react'
import './App.css'

import Box from '@mui/material/Box';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {AuthenticationProvider} from './hooks/useAuth'
import ContactPage from './pages/ContactPage';

function App() {

  // we check auth data from local storage and put it as an object to user
  const user = JSON.parse(localStorage.getItem('smc-user') )

  return (
    <BrowserRouter>
      {/* // we give user, user is sendingg to Authentication provider, and then is set as authDate (useState) */}
      <AuthenticationProvider user = {user}>  {/* everything below are children */}
        <> 
          <Navbar/>
          <Routes> 
            <Route path='contact/' element={<ContactPage/>} />
            
          </Routes>
        </>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default App
