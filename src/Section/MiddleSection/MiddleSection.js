import React, { useState } from 'react'
import style from './MiddleSection.module.css'
import MiddleSectionHeader from "../../Components/HomePageMiddleSection/MiddleSectionHeader/MiddleSectionHeader"
import MiddleSectionMain from '../../Components/HomePageMiddleSection/MiddleSectionMain/MiddleSectionMain'
import CardDetail from '../../Components/CardDetail/CardDetail'









function MiddleSection() {
  const [tweets,setTweets] = useState(0)
console.log(tweets)
  return (
    <div className={style.main}>
       <div className={style.header}><MiddleSectionHeader /></div>  
       <div className={style.body}>
         <div className={style.sectionmain}><MiddleSectionMain  setTweets={setTweets}/></div> 
       
       </div>
      
     <div className={style.CardDetail}>  <CardDetail /></div>
    </div>
  )
}

export default MiddleSection
