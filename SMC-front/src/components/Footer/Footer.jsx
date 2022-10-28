import React from 'react'

// mui
import { BottomNavigation } from '@mui/material';

// css
import './Footer.css'

function Footer() {
  return (
    <BottomNavigation style={{
      width:'100%',
      height:30,
      position: 'fixed',
      bottom:0,
      backgroundColor:"#020717",
      display:'flex',
      flexDirection:'row',
      justifyContent:"center",
      alignItems:'center'
      // alignSelf:'center'
      // marginTop:150

      }} 
    >
      <div className='FooterLinks'>Privacy Policy</div>
      <div className='FooterLinks'>Terms and conditions</div>
      <div className='FooterLinks'>Cookie settings</div>
      <div className='FooterLinks'>Contact</div>
    </BottomNavigation>
    
    
  )
}

export default Footer

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};