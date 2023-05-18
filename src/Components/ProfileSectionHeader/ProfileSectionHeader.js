import React from 'react'
import style from './ProfileSectionHeader.module.css'
import {useNavigate} from "react-router-dom"
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'



function ProfileSectionHeader() {
  const tweetData=useRecoilValue(IspostAtom)
   const navigate = useNavigate()

   const id = useParams();
   const uid=id.id
   // console.log(uid)
 
   const data= tweetData.filter((item)=>{
     return uid==item.id
   })
   
  function handleClick(){
   navigate("/HomePage")
  }
  return (
    <div className={style.main}>

         <span onClick={handleClick}>←</span>
        <div className={style.userName}>
          {data.map((item)=>
            <h4>{item.name}</h4>
          )}
      
        <h6>1 Tweet</h6>
        </div>
    
       </div>

  )
}

export default ProfileSectionHeader
