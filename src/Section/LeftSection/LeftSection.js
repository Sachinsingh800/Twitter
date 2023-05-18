import React  from 'react'
import style from './LeftSection.module.css'
import {FaTwitter} from 'react-icons/fa';
import {ImHome2} from 'react-icons/im';
import {BiHash} from 'react-icons/bi';
import {RiNotification2Line } from 'react-icons/ri';
import {BsBookmark} from 'react-icons/bs';
import {GoMail} from 'react-icons/go';
import {RiFileList2Line} from 'react-icons/ri';
import {CgProfile} from 'react-icons/cg';
import {CiCircleMore} from 'react-icons/ci';
import { Link, useNavigate,  } from 'react-router-dom';
import PopoverPopupState from '../../Atom/Userbutton/Userbutton'
import TwitterDialogBox from '../../Atom/TwitterDialogBox/TwitterDialogBox';



function LeftSection() {
     const navigate = useNavigate()
  function handleClick(){
    navigate("/HomePage")
   }

    const Navoption=[
        {icon:<ImHome2/>, Option: 'Home', path:"/HomePage" },
       {icon:<BiHash/>,  Option: 'Explore' , },
       {icon:<RiNotification2Line/>,  Option: 'Notification' , },
       { icon:<GoMail/>, Option: 'Messages' , },
       { icon:<BsBookmark/>, Option: 'BookMarks' ,},
       { icon:<RiFileList2Line/>,  Option: 'List' ,},
       { icon:<CgProfile/>,   Option:"Profile" , path:"/UserProfilePage"},
         {icon:<CiCircleMore/>,   Option: 'More' ,},
     ]
 
  return (
    <div className={style.main}>
   
      <spna className={style.logo} onClick={ handleClick}><FaTwitter/></spna>
        <div>
        {Navoption.map(({icon,Option ,path})=>
    <Link to={path} className={style.link}> 
        <p className={style.List}><span className={style.icon}>{icon}</span><spna className={style.option}>{Option}</spna></p>
        </Link> ) }
        </div>
      <div className={style.dialogbox}>
       <TwitterDialogBox />
      </div>
      <div className={style.OpenPopover}>
      <PopoverPopupState/>
      </div> 
    </div>
  )
}

export default LeftSection



