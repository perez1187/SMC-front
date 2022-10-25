import React, {useEffect, useState} from 'react'

// services
import { fetchInstructorProfiles } from '../../services/InstructorServices'

// css
import './InstructorComponent.css'

// social icons
import FbICon from '../../assets/socialIcons/facebookIcon.png'
import InstagramIcon from '../../assets/socialIcons/instagramIcon.png'
import LinkedinIcon from '../../assets/socialIcons/linkedinIcon.png'
import LichessIcon from '../../assets/socialIcons/lichessIcon.png'
import TwitterIcon from '../../assets/socialIcons/twitterIcon.png'
import ChesscomIcon from '../../assets/socialIcons/chesscomIcon.png'
import EmailIcon from '../../assets/socialIcons/emailIcon.png'

function InstructorsComponent() {

    // lokal useStates
    const [fetchedInstructorProfilesData, setFetchedInstructorProfilesData] = useState([])
    // const [instructorFilter, setInstructorFilter] = useState('?profile=user_profile&language=1')
    const [instructorFilter, setInstructorFilter] = useState('')
 
    useEffect(()=> {

        const getInstructorProfilesData = async e=> {
            const instructorProfilesData =await fetchInstructorProfiles(instructorFilter)     
            console.log(instructorProfilesData)
        if (instructorProfilesData) {
            setFetchedInstructorProfilesData(instructorProfilesData.results)
            }                    
        }

        getInstructorProfilesData()
        
    },[])    

    function RenderInstructorProfiles(){
        // const testProf = fetchedUserProfilesData.filter()

        function findInstructorTitle(id){
            let object = {}

            // we check if object exist
            try{
                object = fetchedInstructorProfilesData.find(obj => obj.id === id)
            } catch(e) {
                return (console.log("wrong id"))
            } 

            // we check if the instructor is chess_instructor
            if (object.profile_type == "chess_instructor") {
                try {
                    const chess_title  = object.chess_profile.chess_title
                    
                    // if wrong json
                    if (chess_title == undefined) {  
                        console.log("wrong json for chess tilte for profile id " + object.id)                      
                        return ("")
                    }

                    return (chess_title)
                }catch (e) {
                    console.log(e)
                    return ("")
                }
            } 
            // we check if the instructor is draughts_instructor (remember profile calls checkers_profile)
            if (object.profile_type == "draughts_instructor") {
                try {
                    const draughts_title  = object.checkers_profile.draughts_title
                    
                    // if wrong json
                    if (draughts_title == undefined) {  
                        console.log("wrong json for draughts tilte for profile id " + object.id)                      
                        return ("")
                    }

                    return (draughts_title)
                }catch (e) {
                    console.log(e)
                    return ("")
                }
            }             
            
        }

        function FindInstructorTypeOfGame(id){
            let object = {}
            // console.log("wszedlem w funkcje")
            // we check if object exist
            try{
                object = fetchedInstructorProfilesData.find(obj => obj.id === id)
            } catch(e) {
                return (console.log("wrong id"))
            } 

            // we check if the instructor is chess_instructor
            if (object.profile_type == "chess_instructor") {
                // console.log("yes")
                // const typeOfGame  = "Chess"
                return ("Chess Instructor")

            } 
            // we check if the instructor is draughts_instructor (remember profile calls checkers_profile)
            if (object.profile_type == "draughts_instructor") {
                return "Checkers Instructor"
            }             
            
        }

        const listProfiles = fetchedInstructorProfilesData.map(
            (element) => {
                return (
                    <div key={element.id}  className="InstructorProfileBox" >                        
                        <div className='InstructorProfileBoxPersonalData'> {/* Avatar, name, title, game, opinions */}
                            
                            <div > {/* avatar and country flag */}
                                <div className='InstructorProfileBoxAvatar' style={{
                                    backgroundImage: `url(${element.avatar})`,
                                    width:"200px",
                                    height:'200px',
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"cover" 
                                    }} ></div>
                                <div className='InstructorProfileBoxCountryFlag'  style={{
                                    backgroundImage: `url('https://flagcdn.com/40x30/${element.country}.png')`,
                                    backgroundRepeat:"no-repeat",
                                    backgroundSize:"cover" 
                                    }} ></div>
                                
                            </div>{/* avatar and country flag */}

                            <div className='ICInstructorData'> 
                                <div className='ICInstructorTitleName'> 
                                    <div className='ICInstructorTitle'> {findInstructorTitle(element.id)} </div>
                                    <div className='ICInstructorName'> {element.first_name}  </div>
                                    <div className='ICInstructorName'> {element.last_name} </div>
                                </div>
                                <div className='ICInstructorTypeOFGame'> {FindInstructorTypeOfGame(element.id)}</div>  
                                <div className='ICInstructorRankingBox'> 
                                    <div className='ICInstructorCRdef'>Current ranking</div>
                                    <div>2225</div>
                                </div>
                                <div> top ranking</div>
                            
                            </div> {/* Instructor data */}

                        </div>{/* InstructorProfileBoxPersonalData */}
   
 
                    </div>
                )
            }
        )
        return(
            <div className="InstructorSection">
                {listProfiles}
            </div>
                
            
        )
        
    }

  return (
    <div >
        {RenderInstructorProfiles()}
    </div>
  )
}

export default InstructorsComponent