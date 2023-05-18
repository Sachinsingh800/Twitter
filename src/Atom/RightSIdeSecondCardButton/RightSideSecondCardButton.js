import React, { useState } from 'react'
import style from './RightSideSecondCardButton.module.css'
import Image from '../../Assest/Image/Profile.png'
function RightSideSecondCardButton() {

    const [button, setButton] = useState(false)

    function handleButton(){
        setButton(true)
    }
    function handleButton2(){
        setButton(false)
    }

  return (
    <div className={style.main}>
         
            <div className={style.user}>
            <img  className={style.img} src={Image} alt="Profile" />
            <div>
            <div className={style.name}> Suresh Raina🚩</div>  
            <div className={style.id}> @ImRaina</div>  
            </div>
       
            </div>

           <div>
            {
               button ? 
               <button onClick={handleButton2} className={style.button1}>Following</button>
            
             :
           
            <button  onClick={handleButton} className={style.button}>Follow</button>
            }
        
            </div>  
         
    
      
    </div>
  )
}

export default RightSideSecondCardButton
