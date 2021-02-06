import React from 'react'
import PropTypes from 'prop-types'
import avatar from '../assets/avatar.jpg'
const Profile = (props) => {
    return (
        <div style={{backgroundColor:"white" ,width:"250px", height:"520px",
                    textAlign:"center", display:"flex", flexDirection:"column",
                     padding: "20px 20px" , margin:"20px",  borderRadius:"50px",
                       }}>
                       <span > {props.children }</span>    
            <p> <span style={{fontWeight:"bold"}}>Full Name : </span> 
            <br/> {props.fullName}</p>
            <p> <span style={{fontWeight:"bold"}}>Bio :</span> 
            <br/> {props.bio} </p>
            <p>  <span style={{fontWeight:"bold"}}>Proffesion :</span> 
            <br/> {props.proffesion}</p>
            
            <br/>
            <button onClick={()=> props.hundleName(props.fullName)} > Name Of Profil User </button>
            
        </div>
    )
}

export default Profile


Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    proffesion :PropTypes.string,

}
Profile.defaultProps={
    children: <img src= {avatar} />,
    fullName:'user',
    bio :`...` ,
    proffesion : 'Top secret'
}