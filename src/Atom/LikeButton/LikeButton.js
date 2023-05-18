
import React, { useState } from 'react'
import {BsSuitHeart} from 'react-icons/bs';
import {FcLike} from 'react-icons/fc';
import style from "./LikeButton.module.css"

function LikeButton({handleClicked}) {
  
    const [isShow, setShow] = useState(false)
    const [count,setCount] =useState(10)
 
    function handle(){
  
      setShow(!isShow)
      

      if(isShow==true){
        setCount(count-1)
      }else{
        setCount(count+1)
      }
     
    }
  return (
    <div>
      <button className={style.button} onClick={() => { handle(); handleClicked();}}><span className={style.icon}>{isShow ? <span style={{fontSize:"20px"}}><FcLike/></span> : <BsSuitHeart/> }</span>{ isShow ?  count :  count }</button>
    </div>
  )
}

export default LikeButton
