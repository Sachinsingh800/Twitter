import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import style  from './MiddleSectionMain.module.css'
import Image from '../../../Assest/Image/Profile.png'
import { useState ,useEffect} from 'react';
import { BsImage } from 'react-icons/bs'
// import ImageUpload from '../../ImageUpload/ImageUpload';
import { useRecoilState } from 'recoil';
import { IspostAtom } from '../../../RecoilState/RecoilAtom';

import CollectionsIcon from '@mui/icons-material/Collections';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useRef  } from 'react';




const Transition = React.forwardRef(function Transition(props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MiddleSectionMain({setTweets}) {

  const [image,setImage] = useState('')
    const inputRef = useRef(null)



  const [data, setData] = useState("")
  const [tweet, setTweet] = useRecoilState(IspostAtom)
  const [open, setOpen] = React.useState(false);
  // const [tweetData,setTweetData] = useState( postData )
  // console.log(tweet)


  const iconList = [
    {
        icon : <CollectionsIcon
        className={style.icon}
        />,
        action : 'pickImage'

    },
    {
        icon : <GifBoxOutlinedIcon
        className={style.icon}
        />,

    },
    {
        icon : <ListOutlinedIcon
        className={style.icon}
        />,
    },
    {
        icon : <EmojiEmotionsOutlinedIcon
        className={style.icon}
        />,
    },
    {
        icon :  <LocationOnOutlinedIcon
        className={style.icon}
        />
    }  
]


function handleOnClickIcon (action) {
    if(action === 'pickImage'){       
        inputRef.current.click()
    }
}


function handleOnSelectImage (e) {
    let reader = new FileReader();
    reader.onload = (e) => {
        setImage(e.target.result);
        // inputRef.current = null 
    };
    reader.readAsDataURL(e.target.files[0]);
}

  const newData=JSON.parse(localStorage.getItem("loginUser"))
  function handleSummit(e){
    e.preventDefault()
    
    const newTweet =  {
      id: 10,
      name  : newData.Name,
      handlerName : newData.Email ,
      organization : "",
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022',
      hardcode:"",
      userhandlername:"",
      tweets : [
          {
              tweetText : data,
              tweetPic : image,
              tweetCount : 100,
              retweetCount : 100 ,
              likesCount : 100,
              viewsCount : '102k',
              TweetReplies : [
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },
                  {
                      name : '',
                      handlerName : '',
                      tweetReplyText : ''
                  },

              ]
          },
        
      ],
    }
    setTweet([newTweet, ...tweet])
    setOpen(false);
    setData(" ")
    setImage(" ")
   
    inputRef.current.value=""
  }
 
    localStorage.setItem("userTweets",JSON.stringify(tweet))
    setTweets(tweet)

 
  return (

      <div  className={style.maindiv}>
      <img className={style.image} src={Image} alt="Profile"/>
      <div className={style.dialogBox}>
       <input className={style.input}  onChange={(e)=> setData(e.target.value)} value={data} placeholder="What's happening?"></input>
      </div>
      <div>
     
      </div>
      <div >
         

           { 
            image &&  
            <div className={style.imageWrapper}>
                <img
                    src={image}
                    height = '40%'
                    width = '40%'
                />
                </div>
            }
           {/* tweet btn and icon container */}

            <div className={style.tweetFooterWrapper}>

            <div className={style.icons}>
                    {iconList.map(({icon,action},index) => (
                        <div 
                            onClick={
                                () => handleOnClickIcon(action)
                            }
                        >{icon}</div>
                    ))}
                </div>

            </div>
            <input
                type = 'file'
                hidden
                ref={inputRef}
                onChange = {handleOnSelectImage}
                name = 'tweetPic'
            />

        </div>
      <button onClick={handleSummit}   className={style.tweet} >Tweet</button>
       </div>
      
    
  );
}








