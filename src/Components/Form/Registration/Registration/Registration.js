import React from 'react'
import style from './Registration.module.css'
import {FaTwitter} from 'react-icons/fa';
import Button from '../../../../Atom/Button/Button';
import Image from '../../../../Assest/Image/apple.png'
import Image2 from '../../../../Assest/Image/google.png'
import { Link } from 'react-router-dom';
import Account from '../RegistrationAccount/RegistrationAccount/Account'
import { useState } from 'react';




function Registration() {
  const [isToggle, setIsToggle]=useState(false)
  function Toggle(){
    setIsToggle(true)
  }
    
  return (
    <>
     {
     isToggle ? <Account /> :
     
    <div className={style.main} >
        <form className={style.form}>
        <FaTwitter className={style.logo} />
            <h1 >Join Twitter today</h1>
            <Button
              SignUpTxt={"Sign up with Google"}
              Image={Image2}
              />
          
            <br/>
            <Button 
             SignUpTxt={"Sign up with Apple"}
             Image={Image}
             />
            <br/>
            <span  className={style.line}><hr/><span className={style.or}>or</span> <hr/></span> 
           <br/>
            <Button handleClick={Toggle}
             SignUpTxt={"Sign up with phone or email"}/>
          <span className={style.para} > <span >By signing up, you agree to the <span  className={style.termandcondition}>Terms of Service</span> and <span  className={style.termandcondition}>Privacy Policy</span>,including <span  className={style.termandcondition}>Cookie Use.</span> </span></span> 
          <h4 >Already have an account? <span  className={style.link}> <Link to={"/Login"}> Login</Link></span> </h4>
        </form>
      
    </div>
    }
    </>
  )
}

export default Registration
