import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
// import { style } from '@mui/system';
import style from './SearchBar.module.css'
import { BsSearch} from 'react-icons/bs';
import { RxCrossCircled} from 'react-icons/rx';


export default function SearchBar() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
        <div className={style.inputmain}>
           <span className={style.icon1}><BsSearch/></span>
            <input   placeholder="Search Twitter" className={style.Input} {...bindTrigger(popupState)}>
          </input>
          <span className={style.icon2}><RxCrossCircled/></span>
        </div>  
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
                <li>try searching for Pople, topic , or keywords</li>
               </ul>
            </Typography>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
