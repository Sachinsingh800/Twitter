import React, { useState } from 'react'
import style from './TweetReplies.module.css'
import Image from "../../Assest/Image/Profile.png"
import { useParams } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import RetweetButton from '../../Atom/RetweetButton/RetweetButton'
import LikeButton from '../../Atom/LikeButton/LikeButton'


function TweetReplies() {
    const tweetData=JSON.parse(localStorage.getItem("userTweets"))
   
    const id = useParams();
    const uid=id.id
    // console.log(uid)
  
    const data= tweetData.filter((item)=>{
      return uid==item.id
    }) 
    const newdata=data[0].tweets[0].TweetReplies
    const handlerName =data[0].handlerName
 console.log(newdata)

  return (
    <div className={style.main}>
      { newdata.map((item)=>
      <>
          <div className={style.firstdiv}>
      <div className={style.body}>
        <img  className={style.img} src={Image} alt="Profile" />
        <div className={style.userDetails}>
        <h4>{`${item.name}  ${item.handlerName}`}</h4>
        <h5>Replying to <span className={style.handlerName}>{handlerName}</span></h5>
        </div>
       
      </div>
        <div className={style.para}>{item.tweetReplyText}</div>

        <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>
      </div>
      </>
      )}
     
    </div>
  )
}

export default TweetReplies
