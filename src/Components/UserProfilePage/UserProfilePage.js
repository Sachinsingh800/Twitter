import React from 'react'
import style from './UserProfilePage.module.css'
import LeftSection from '../../Section/LeftSection/LeftSection'
import RightSection from '../../Section/RightSection/RightSection'
import UserProfileSection from '../UserProfileSection/UserProfileSection'


function UserProfilePage() {
  return (
    <div className={style.main}>
      
      <div className={style.child1}><LeftSection/></div>
      <div className={style.child2}><UserProfileSection /></div>
     <div className={style.child3}> <RightSection /></div>
    </div>
  )
}

export default  UserProfilePage
