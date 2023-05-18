import React, { useState } from 'react'
import CommentDialogBox from '../../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../../Atom/LikeButton/LikeButton'
import RetweetButton from '../../../Atom/RetweetButton/RetweetButton'
import style from './Page1.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { IspostAtom } from '../../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'
import { useParams } from 'react-router-dom'
import TweetReplies from '../../TweetReplies/TweetReplies'

function Page1() {
    const tweetData=useRecoilValue(IspostAtom)
    const [toggle ,setToggle] = useState(false)

    const id = useParams();
    const uid=id.id

    const data= tweetData.filter((item)=>{
        return uid==item.id
      })
    
      function handlesubmit(){
      setToggle(!toggle)
      }
  return (
    <>
{toggle ? <div onClick={handlesubmit} className={style.main}>
 

{ data.map((item)=>

<>

<div className={style.heading}>
        <img className={style.img} src={Image} alt="Profile"/>
        <h2>{item.name}</h2>
        <h5>{item.handlerName}</h5>
</div>

<div className={style.ImageWrapper}>
         <p>{item.tweets[0].tweetText}</p>
        <img src = {item.tweets[0].tweetPic} className={style.image}/>
</div>

</>
)}


             
            
             <div className={style.bottomSection}>
                <CommentDialogBox/>
                <RetweetButton/>
                <LikeButton/>
             </div>
             <TweetReplies/>
             </div> : <div onClick={handlesubmit} className={style.main}>
 

 { data.map((item)=>
 
 <>
 
 <div className={style.heading}>
         <img className={style.img} src={Image} alt="Profile"/>
         <h2>{item.name}</h2>
         <h5>{item.handlerName}</h5>
 </div>
 
 <div className={style.ImageWrapper}>
          <p>{item.tweets[0].tweetText}</p>
         <img src = {item.tweets[0].tweetPic} className={style.image}/>
 </div>
 
 </>
 )}
 
 
              
             
              <div className={style.bottomSection}>
                 <CommentDialogBox/>
                 <RetweetButton/>
                 <LikeButton/>
              </div>

              </div> }
 
             </>
  )
}

export default Page1

  