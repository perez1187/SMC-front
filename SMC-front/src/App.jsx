import './App.css'

// pages
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import ActivatePage from './pages/ActivatePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

// components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// react
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// context
import {AuthenticationProvider} from './hooks/useAuth'






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
            <Route path='/' element={<LandingPage/>} />  
            <Route path='contact/' element={<ContactPage/>} />
            <Route path='login/' element={<LoginPage/>} />
            <Route path='register/' element={<RegisterPage/>} />
            <Route path='activate/' element={<ActivatePage/>} /> 
            <Route path='forgot-password/' element={<ForgotPasswordPage/>} />            
          </Routes>

          <Footer/>
        </>
      </AuthenticationProvider>
    </BrowserRouter>
  )
}

export default App
