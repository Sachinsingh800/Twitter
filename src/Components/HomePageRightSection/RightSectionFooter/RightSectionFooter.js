import style from './RightSectionFooter.module.css'
import React from 'react'

function RightSectionFooter() {
  return (
    <div className={style.main}>
      <p> <span>Term of Service  </span>     <span>Privacy Policy </span>   <span> Cookie Policy </span>  <span> Accessibility</span>  <span>Ads info </span>More...</p>
      <p>© 2023 Twitter, Inc.</p>
    </div>
  )
}

export default RightSectionFooter
