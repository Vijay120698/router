import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} =useParams()
    

  return (
    <div><h1>user Profile Page</h1>
    <p>user Id is <h3> <b style={{color:'red'}}>{id}</b></h3></p>

    
    </div>
  )
}


export default User