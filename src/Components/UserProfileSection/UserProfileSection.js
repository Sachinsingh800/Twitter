import React from 'react'
import style from './UserProfileSection.module.css'
import ProfileSectionHeader from '../ProfileSectionHeader/ProfileSectionHeader'
import Image from '../../Assest/Image/Profile.png'
import { useNavigate } from 'react-router-dom'
import { IspostAtom } from '../../RecoilState/RecoilAtom'
import { useRecoilValue } from 'recoil'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import RetweetButton from '../../Atom/RetweetButton/RetweetButton'
import LikeButton from '../../Atom/LikeButton/LikeButton'


function UserProfileSection() {
 
 
  const tweetdata =JSON.parse(localStorage.getItem("userTweets"))

  const newTweetdata= tweetdata.filter((item)=>{
    return 10==item.id
  })

       const navigate = useNavigate()
    const newdata=JSON.parse(localStorage.getItem("loginUser"))
    const data=[newdata]

 
    function handleClick(){
        navigate("/HomePage")
       }
  return (
    <>
    {/* //header part */}

    <div className={style.header}>
        <span onClick={handleClick}>←</span>
        <div className={style.head}>
          {data.map((item)=>
            <h4>{item.Name}</h4>
          )}
      
        <h6>1 Tweet</h6>
        </div>
     </div>





<div  className={style.userProfiledetails}>

{data.map((elem)=>

<div className={style.main}>
<div className={style.body}>
   <div className={style.firstdiv}></div>
                     <div className={style.seconddiv}>
                         <div className={style.userDetails}>
                         <h2>{elem.Name}</h2>
                         <h4>{elem.Email}</h4>
                       <h6 className={style.userName}></h6>
                          <h6>&#128197; 20 dec 2000</h6>
                           <h6>{`30k  Following    20k Followers`}</h6>
                          </div>


                       <div className={style.btns}>
                           <button>tweet</button>
                            <button>tweet & replies</button>
                            <button>Media</button>
                           <button>Likes</button>
                        </div>
                       
                        
                     </div>
<img src={Image} className={style.profileimg}></img>
</div>

{newTweetdata.map((item)=>
<>
<div className={style.userbody}>
<div className={style.tweetbox}>
<div className={style.heading}>
                                 <img className={style.img} src={Image} alt="Profile"/>
                                
                               
                                <h2>{item?.name}</h2>
                                 <h5>{item?.handlerName}</h5>
                        </div>
                        <p>{item?.tweets[0]?.tweetText}</p>
                     <img
                       className={style.image}
                         src = {item?.tweets[0]?.tweetPic}    
                     />

</div>

                <div className={style.bottomSection}>
                    <CommentDialogBox/>
                    <RetweetButton/>
                     <LikeButton/>
                  </div>
                  </div>
</>
)}
</div>



 )}
</div>
    
      
    
      </>
  )
}

export default UserProfileSection
