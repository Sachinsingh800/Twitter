import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Image from '../../Assest/Image/Profile.png'
import style from './SideBar.module.css'
import { ImHome2 } from 'react-icons/im';
import { BiHash } from 'react-icons/bi';
import { RiFileList2Line, RiNotification2Line } from 'react-icons/ri';
import { GoMail } from 'react-icons/go';
import { BsBookmark } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { CiCircleMore } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function SideBar() {
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
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
      <h2>account info</h2>
      </List>
      <Divider />
      <List>
        {Navoption.map(({icon,Option ,path}) => (
            <Link to={path} className={style.link}> 
          <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
               {icon}
              </ListItemIcon>
              <ListItemText primary={Option} />
            </ListItemButton>
          </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><img className={style.img} src={Image}/></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
