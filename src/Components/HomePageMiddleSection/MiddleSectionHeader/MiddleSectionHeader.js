import React from 'react'
import SideBar from '../../../Atom/SideBar/SideBar'
import style from './MiddleSectionHeader.module.css'
import {FaTwitter} from 'react-icons/fa';

function MiddleSectionHeader() {
  return (
    <>
    <div className={style.main}>
    <div className={style.headerone}><SideBar /> <span className={style.logo} ><FaTwitter /></span></div> 
      <h2 className={style.head}>Home</h2>
      <div className={style.button}>
        <button>For you</button>
        <button>Following</button>
      </div>
    </div>
    </>
  )
}

export default MiddleSectionHeader
