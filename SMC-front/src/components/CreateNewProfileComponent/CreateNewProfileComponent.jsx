import React, {useState} from 'react'

// using context
import {useAuth} from '../../hooks/useAuth'

// services
import { CreateNewProfile } from '../../services/profile-services'
import { refreshAccessToken } from '../../services/user-services'

// css
import './CreateNewProfileComponent.css'

function CreateNewProfileComponent() {

    // useStates for context
    const {authData,setAuth} =useAuth()

    // useStates for form
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [avatar, setAvatar] = useState()
    const [slug,setSlug] = useState('')

    console.log(name)
 
    // function for create new profile
    const handleSubmit = async e => {
        // e.preventDefault() // we are not going to refresh the page
        console.log("wszedlem")
        if (authData) {
            
            // first we create new access token
            const newAccessToken = await refreshAccessToken(authData.tokens.refresh)
            // const newAccessToken = await refreshAccessToken(test_wrong_token)
            // console.log(newAccessToken.access)
            
            // if refresh token is not valid, we logout the user
            if (newAccessToken.detail) {

                setAuth(null)
                navigateHome()

            // else, we fetch user profiles    
            } else {
 
                    // form data automatically create  'Content-Type'
                    const createData = new FormData()

                    // we add all fields to FormData like that:
                    createData.append('user',authData.id)
                    createData.append('avatar',avatar)
                    createData.append('slug',slug)

                    // we call CreateNewProfile function and paste token + data
                    const data = await CreateNewProfile( 
                        newAccessToken.access,
                        createData
                    ) 
                    console.log(data)
                }
            }
        else {
            console.log("you need to login")
            // we need to send info to user that he needs to login
        }
    }

  return (
    <div>
        CreateNewProfileComponent
        <div>
            <button>Chess Instructor</button>
            <button>Draughts Instructor</button>
            <button>Academy/Club</button>
        </div>
        <button onClick={()=>handleSubmit()}> Create New Profile</button>
        
        {/* form for creating profile */}
        <form  className='CNPForm'>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Profile Visible (Landing Page):</div>
                <input type="text" />
            </label >
            <label className='CNPLabel'>
                <div className='CNPLabelName'> First Name:</div>
                <input type="text" onChange={ e => setName(e.target.value)} />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Last Name:</div>
                <input type="text" />
            </label >
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Profile name </div>
                <input type="text" onChange={ e => setSlug(e.target.value)} /> 
            </label >
            <label className='CNPLabel'>
                <div className='CNPLabelName' > Avatar:</div>
                {/* files bec we can add many files, and we want 1, that is we add [0] */}
                <input type="file" accept='image/*'  onChange={ e => setAvatar(e.target.files[0])} /> 
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Country:</div>
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Chess Titile:</div>
                <input type="text" />
            </label>
            Rating (fide.com)
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Std</div>
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Rapid:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Blitz:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Std:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Std Year:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Rapid:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Rapid Year:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz Year:</div>                
                <input type="text" />
            </label>
            
            {/* checkers rating  */}
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Draughts Title:</div>
                <input type="text" />
            </label>
            Rating (fmjd.org)
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Classic</div>
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Blitz:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Classic:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Classic Year:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz Year:</div>                
                <input type="text" />
            </label>

            Socials
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Facebook</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Instagram:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Twitter:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Youtube:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Tiktok</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Fide.com:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Chess.com:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Lichess.org:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> fmjd.org:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Languages:</div>                
                <input type="text" />
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Description:</div>                
                <textarea rows='5' cols="50" value=''>description </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Successes:</div>                
                <textarea rows='5' cols="50" value=''> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Teaching Experience:</div>                
                <textarea rows='5' cols="50" value=''> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> About Me:</div>                
                <textarea rows='5' cols="50" value=''> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Message to SMC (optional):</div>                
                <textarea rows='5' cols="50" value=''> </textarea>
            </label>
                           
            
            
            {/* <label className='CNPLabel'>
                <div className='CNPLabelName'> Message to SMC (optional):</div>                
                <textarea rows='5' cols="50" value=''> </textarea>
            </label> */}
            
        </form>
        fdsnsdjknk
        <button onClick={()=>handleSubmit()}> create</button>
        <label> d</label>
    </div>
  )
}

export default CreateNewProfileComponent