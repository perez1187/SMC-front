import React from 'react'
import axios from "axios";
import { useEffect } from 'react';

function Navbar() {
    
    useEffect(()=> {
        const getData = async () => {
            await fetch('http://127.0.0.1:8000/profile-owner/profiles3/')
            .then(resp => resp.json())
            .then( data => {
                console.log(data)
            })
        }
        getData();
    }, [])

  return (
    <div>


    </div>
  )
}

export default Navbar