import React from 'react'

// images
import sectionOneBGImage from "../../../../assets/images/landingPage.jpg" 

// css
import './IntroduceComponentLP.css'

function IntroduceComponentLP() {
  return (
    <div className='LPIntroduceBGImage'  style={{ backgroundImage: `url(${sectionOneBGImage})` }}>
    {/* // <div className='LPIntroduceBGImage' > */}
      {/* <img src={sectionOneBGImage} alt="Logo" className='LPIntroduceBGImage' />; */}

    </div>
  )
}

export default IntroduceComponentLP