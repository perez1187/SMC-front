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
    const [isVisible, setIsVisible] = useState(false) // visible on all instructors page
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [slug,setSlug] = useState('') // profilename
    const [avatar, setAvatar] = useState()
    const [country, setCountry] = useState('')

    // chess
    const [chessTitile, setChessTitle] = useState('')
    const [actualRatingStdChess, setActualRatingStdChess] = useState('')
    const [actualRatingRapidChess, setActualRatingRapidChess] = useState('')
    const [actualRatingBlitzChess, setActualRatingBlitzChess] = useState('')
    const [topRatingStdChess, setTopRatingStdChess] = useState('')
    const [topRatingStdChessYear, setTopRatingStdChessYear] = useState('')
    const [topRatingRapidChess, setTopRatingRapidChess] = useState('')
    const [topRatingRapidChessYear, setTopRatingRapidChessYear] = useState('')
    const [topRatingBlitzChess, setTopRatingBlitzChess] = useState('')
    const [topRatingBlitzChessYear, setTopRatingBlitzChessYear] = useState('')

    // checkers
    const [checkersTitile, setCheckersTitle] = useState('')
    const [actualRatingStdCheckers, setActualRatingStdCheckers] = useState('')
    const [actualRatingBlitzCheckers, setActualRatingBlitzCheckers] = useState('')
    const [topRatingStdCheckers, setTopRatingStdCheckers] = useState('')
    const [topRatingStdCheckersYear, setTopRatingStdCheckersYear] = useState('')
    const [topRatingBlitzCheckers, setTopRatingBlitzCheckers] = useState('')
    const [topRatingBlitzCheckersYear, setTopRatingBlitzCheckersYear] = useState('')

    // social media
    const [FB, setFB] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [yt, setYt] = useState('')
    const [tiktok, setTiktok] = useState('')

    // social chess
    const [fide, setFide] = useState('')
    const [chess_com, setChess_com] = useState('')
    const [lichess, setLichess] = useState('')

    // social checkets
    const [fmjd, setFmjd] = useState('')

    // other for later
    const [languages, setLanguages] = useState('')

    // profile description
    const [description, setDescription] = useState('')
    const [successes, setSuccesses] = useState('')
    const [experience, setexperience] = useState('')
    // const [aboutMe, setAboutMe] = useState('')
    const [messageToSMC, setMessageToSMC] = useState('')
    
    console.log(actualRatingBlitzChess)

     // function for create new profile
    const handleSubmit = async e => {
        // e.preventDefault() // we are not going to refresh the page
        // console.log("wszedlem")
        if (authData) {
            
            // first we create new access token
            const newAccessToken = await refreshAccessToken(authData.tokens.refresh)
            // const newAccessToken = await refreshAccessToken(test_wrong_token)
            // console.log(newAccessToken.access)
            
            // if refresh token is not valid, we logout the user
            if (newAccessToken.detail) {

                setAuth(null)
                navigateHome()

             
            } else {
 
                    // form data automatically create  'Content-Type'
                    const createData = new FormData()

                    const defaultChessProfile = {
                        "chess_title":"GM",                        
                        "actual_rating":actualRatingStdChess,
                        "actual_ratingRapid":actualRatingRapidChess,
                        "actual_ratingBlitz":actualRatingBlitzChess,
                        "top_rating":topRatingStdChess,
                        "top_rating_date":topRatingStdChessYear,
                        "top_ratingRapid":topRatingRapidChess,
                        "top_ratingRapid_date":topRatingRapidChessYear,
                        "top_ratingBlitz":topRatingBlitzChess,
                        "top_ratingBlitz_date":topRatingBlitzChessYear,                                                 
                        "chess.com":chess_com,
                        "fide.com":fide,
                        "lichess.org":lichess,                        
                    }

                    const defaultCheckersProfile = {
                        "draughts_title":"GM",                        
                        "actual_rating":actualRatingStdCheckers,
                        "actual_ratingBlitz":actualRatingBlitzCheckers,
                        "top_rating":topRatingStdCheckers,
                        "top_rating_date":topRatingStdCheckersYear,
                        "top_ratingBlitz":topRatingBlitzCheckers,
                        "top_ratingBlitz_date":topRatingBlitzCheckersYear,                                                 
                        "fmjd.org":fmjd,                      
                    }

                    // we add all fields to FormData like that:
                    createData.append('user',authData.id)
                    createData.append('avatar',avatar)
                    createData.append('slug',slug)
                    createData.append('chess_profile',JSON.stringify(defaultChessProfile))
                    createData.append('checkers_profile',JSON.stringify(defaultCheckersProfile))

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
    <div className='CNPContainer'>
        CreateNewProfileComponent
        <div>
            <button>Chess Instructor</button>
            <button>Draughts Instructor</button>
            <button>Academy/Club</button>
        </div>
        <button onClick={()=>handleSubmit()}> Create New Profile</button>
        
        {/* form for creating profile */}
        <form  className='CNPForm'>
            {/* <label className='CNPLabel'>
                <div className='CNPLabelName'> Profile Visible (Landing Page):</div>
                <input type="radio" />
            </label > */}
            <label className='CNPLabel'>
                <div className='CNPLabelName'> First Name:</div>
                <input type="text" onChange={ e => setName(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Last Name:</div>
                <input type="text" onChange={ e => setLastName(e.target.value)}/>
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
                <input type="text" onChange={ e => setActualRatingStdChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Rapid:</div>                
                <input type="text" onChange={ e => setActualRatingRapidChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Blitz:</div>                
                <input type="text" onChange={ e => setActualRatingBlitzChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> The highest ranking Std:</div>                
                <input type="text" onChange={ e => setTopRatingStdChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Year:</div>                
                <input type="text" onChange={ e => setTopRatingStdChessYear(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> The highest ranking Rapid:</div>                
                <input type="text" onChange={ e => setTopRatingRapidChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Year:</div>                
                <input type="text" onChange={ e => setTopRatingRapidChessYear(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> The highest ranking Blitz:</div>                
                <input type="text" onChange={ e => setTopRatingBlitzChess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Year:</div>                
                <input type="text" onChange={ e => setTopRatingBlitzChessYear(e.target.value)}/>
            </label>
            
            {/* checkers rating  */}
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Draughts Title:</div>
                <input type="text" />
            </label>
            Rating (fmjd.org)
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Classic</div>
                <input type="text" onChange={ e => setActualRatingStdCheckers(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Actual Rating Blitz:</div>                
                <input type="text" onChange={ e => setActualRatingBlitzCheckers(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Classic:</div>                
                <input type="text" onChange={ e => setTopRatingStdCheckers(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Classic Year:</div>                
                <input type="text" onChange={ e => setTopRatingStdCheckersYear(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz:</div>                
                <input type="text" onChange={ e => setTopRatingBlitzCheckers(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Top Rating Blitz Year:</div>                
                <input type="text" onChange={ e => setTopRatingBlitzCheckersYear(e.target.value)}/>
            </label>

            Socials
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Facebook</div>                
                <input type="text" onChange={ e => setFB(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Instagram:</div>                
                <input type="text" onChange={ e => setInstagram(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Twitter:</div>                
                <input type="text" onChange={ e => setTwitter(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Youtube:</div>                
                <input type="text" onChange={ e => setYt(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Tiktok</div>                
                <input type="text" onChange={ e => setTiktok(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Fide.com:</div>                
                <input type="text" onChange={ e => setFide(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Chess.com:</div>                
                <input type="text" onChange={ e => setChess_com(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Lichess.org:</div>                
                <input type="text" onChange={ e => setLichess(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> fmjd.org:</div>                
                <input type="text" onChange={ e => setFmjd(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Languages:</div>                
                <input type="text" onChange={ e => setLanguages(e.target.value)}/>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Description:</div>                
                <textarea rows='5' cols="50" value='' onChange={ e => setDescription(e.target.value)}>description </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Successes:</div>                
                <textarea rows='5' cols="50" value=''onChange={ e => setSuccesses(e.target.value)}> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Teaching Experience:</div>                
                <textarea rows='5' cols="50" value=''onChange={ e => setexperience(e.target.value)}> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> About Me:</div>                
                <textarea rows='5' cols="50" value=''onChange={ e => setAboutMe(e.target.value)}> </textarea>
            </label>
            <label className='CNPLabel'>
                <div className='CNPLabelName'> Message to SMC (optional):</div>                
                <textarea rows='5' cols="50" value=''onChange={ e => setMessageToSMC(e.target.value)}> </textarea>
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