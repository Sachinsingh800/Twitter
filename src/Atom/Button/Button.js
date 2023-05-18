import React from 'react'
import Image from './google.png'
import style from './Button.module.css'

function Button({SignUpTxt,Image,handleClick}) {
  return (
    <div>
        <button onClick={handleClick} className={style.signbtn}><img className={style.img1} src={Image}></img>{SignUpTxt}</button>
    </div>
  )
}

export default Button
