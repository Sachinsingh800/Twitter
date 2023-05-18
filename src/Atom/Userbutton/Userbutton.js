import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import { style } from '@mui/system';
import style from './Userbutton.module.css'
import Image from '../../Assest/Image/Profile.png'
import { BsThreeDots} from 'react-icons/bs'
import {isUserLoggedInAtom}  from "../../../src/RecoilState/RecoilAtom"
import {  useSetRecoilState } from "recoil";

export default function PopoverPopupState() {
  const setUserLoggedInStatus = useSetRecoilState(isUserLoggedInAtom)


 const newdata=JSON.parse(localStorage.getItem("loginUser")) 
const data=[newdata]
//  console.log(data)

//  const newdata= data.filter((item)=>{
//   return id==item.id
// })
  

  function Logout(){
    setUserLoggedInStatus (false)
    localStorage.removeItem("loginUser")
    window.location.assign("/Login")
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.button} variant="contained" {...bindTrigger(popupState)}>
            <div className={style.popover}>

             
              <span><img  className={style.img} src={Image}></img></span> 
               <span className={style.names}>
               { data.map((item)=>
               <>
                   <div className={style.name}>{item.Name}</div> 
              
                   <div className={style.name}>{item.Email}</div> 
                   </>
               )}
           
               </span>
             <span className={style.dot}><BsThreeDots/></span> 
           
            
            </div>
          </button>
          <Popover className={style.pop}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          
          >
            <Typography sx={{ p: 2 }}>
                <ul>
                { data.map((item)=>
                <div onClick={Logout}><h4>Logout-</h4>{item.Email}</div>
)}
               </ul>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
