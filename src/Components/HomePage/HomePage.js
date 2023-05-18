import React from 'react'
import style from './HomePage.module.css'
import LeftSection from '../../Section/LeftSection/LeftSection'
import MiddleSection from '../../Section/MiddleSection/MiddleSection'
import RightSection from '../../Section/RightSection/RightSection'
import { isUserLoggedInAtom } from '../../RecoilState/RecoilAtom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilValue } from 'recoil'
import FloatingButton from '../../Atom/FloatingButton/FloatingButton'
import SideBar from '../../Atom/SideBar/SideBar'

function HomePage() {

  const isUserLoggedIn = useRecoilValue(isUserLoggedInAtom)
  const nevigate = useNavigate()

  // useEffect (() => {
  //     if(!isUserLoggedIn) {
  //         nevigate('/Login')
  //     }
  // },[isUserLoggedIn])

  return (
    <div className={style.main}>
      <div className={style.LeftSection}><LeftSection /></div>
     <div><MiddleSection />
     <div className={style.floatingbtn}><FloatingButton/></div> 
     </div>
     <div  className={style.RightSection}><RightSection /></div> 

    </div>
  )
}

export default HomePage
