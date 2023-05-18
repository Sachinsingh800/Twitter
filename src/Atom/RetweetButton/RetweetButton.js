import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import style from './RetweetButton.module.css'
import { BsThreeDots} from 'react-icons/bs'
import {isUserLoggedInAtom}  from "../../../src/RecoilState/RecoilAtom"
import { useRecoilState } from "recoil";
import { FaRetweet } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';

export default function RetweetButton() {
  const [userLoginStatus, setUserLoginStatus] = useRecoilState(isUserLoggedInAtom)

  function Logout(){
    localStorage.removeItem("userData")
    window.location.assign("/Login")
  }
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button className={style.button}  {...bindTrigger(popupState)}>
            <div className={style.popover}>
            <FaRetweet/>{"100"}
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
                <div className={style.retweetbtn}>
                <button ><span className={style.icon}><FaRetweet/></span>retweet</button>
                <button ><span className={style.icon}><AiFillEdit/></span>Quote tweet</button>
               </div>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
