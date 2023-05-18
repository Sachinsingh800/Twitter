import style from './CardDetail.module.css'
import CommentDialogBox from '../../Atom/CommentDialogBox/CommentDialogBox'
import LikeButton from '../../Atom/LikeButton/LikeButton'
import RetweetButton  from '../../Atom/RetweetButton/RetweetButton'
import Image from '../../Assest/Image/Profile.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'








export default function CardDetail() {
  const likes=JSON.parse(localStorage.getItem("userTweets"))
//  console.log(likes,"carddetails")
  const [isShow, setShow] = useState(false)
  const [count,setCount] =useState(10)

function Comment(id){
  const newData=likes.filter((item)=>item.id === id)
  const handlerName=newData[0].handlerName
 localStorage.setItem("handlername",JSON.stringify(handlerName))
 
}


function Counter(id){

   const newData=likes.filter((item)=>item.id === id)
    newData[0].tweets[0].likesCount=count
localStorage.setItem("likes",JSON.stringify( newData))
  // console.log(newData)

  setShow(!isShow)
  
  if(isShow==true){
    setCount(count-1)
  }else{
    setCount(count+1)
  }
 
}
    const [data, setData] = useState([])
    console.log(data)

    const items = JSON.parse(localStorage.getItem('userTweets') ) || []
    console.log(items,"carddetails")
     
     
    return(
             
                 <div className={style.ImageWrapper}>
                     {items.map((item,id)=>
                     <>
                         <div key={id} className={style.heading}>
                                <Link to={`/ProfilePage/${item?.id}`}> <img className={style.img} src={Image} alt="Profile"/></Link>   
    
                                <h2>{item?.name}</h2>
                                 <p>{item?.handlerName}</p>
                                 
                        </div>
                        <p>{`${item?.hardcode} ${item?.userhandlername}`}</p>
                        <p>{item?.tweets[0]?.tweetText}</p>
                     <img
                       className={style.image}
                         src = {item?.tweets[0]?.tweetPic}    
                     />

                     

                <div className={style.bottomSection}>
                    <CommentDialogBox   handleClicked={()=>Comment(item.id)}/>
                    <RetweetButton/>
                     <LikeButton   handleClicked={()=>Counter(item.id)}/>
                  </div>

                     </>
                     )}

               
                 </div>
                
    )
}



