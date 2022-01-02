import React from "react";
import "./midcomponent.css"
import TweetBox from "./TweetBox";
import Tweets from "./Tweets";
import Profile from "./profile"
import { profileData } from "../profileData";
import { useState } from "react";

const Mid=()=>{
  const [profileInfo,setProfileInfo]= useState(profileData)
  return(
      <div className="midbody">
        
        <Tweets {...profileInfo}/>
        {/* <Profile {...profileInfo}/> */}

      </div>
  )
}
export default Mid;