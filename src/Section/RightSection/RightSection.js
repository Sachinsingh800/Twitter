import React from 'react'
import style from './RightSection.module.css'
import SearchBar from '../../Components/HomePageRightSection/RightSectionComponent/SearchBar/SearchBar'
import RightSectionFooter from '../../Components/HomePageRightSection/RightSectionFooter/RightSectionFooter'
import RightComponent from '../../Components/HomePageRightSection/RightComponent/RightComponent'
import RightSideSecondCard from '../../Components/HomePageRightSection/RightSideSecondCard/RightSideSecondCard'

function RightSection() {
  return (
    <div className={style.main}>
      <div className={style.SearchBar}><SearchBar /></div>  
      <div className={style.body}>
     <div className={style.firstComponent}><RightComponent/></div>  
     <RightSideSecondCard/>
      <RightSectionFooter/>

      </div>
   
    </div>
  )
}

export default RightSection
