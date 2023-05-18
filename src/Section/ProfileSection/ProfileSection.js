import React from 'react'
import ProfileSectionHeader from '../../Components/ProfileSectionHeader/ProfileSectionHeader'
import  style from "./ProfileSection.module.css"

import Page1 from '../../Components/Pages/Page1/Page1'
import ProfilePage1Card from '../../Components/ProfilePage1Card/ProfilePage1Card'



function ProfileSection() {

  return (
    <div  className={style.main}>
     <div className={style.header}> <ProfileSectionHeader/></div>  
        <ProfilePage1Card />
    <div>
        <Page1/>
    </div>
   
    </div>
  )
}

export default ProfileSection
