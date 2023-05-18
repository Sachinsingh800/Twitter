import React from 'react'
import style from './FloatingButton.module.css'
import { GiFeather  } from 'react-icons/gi';
import { Link } from 'react-router-dom';



function FloatingButton() {

  return (
    <div className={style.main}>
   <Link to={"/TweetPage"}  >
   <button ><span className={style.pluse}>+</span><GiFeather /></button>
   </Link>
    </div>
  )
}

export default FloatingButton
