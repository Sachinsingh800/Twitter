import { atom } from "recoil";
import { postData } from "../Const/Const";



export const isUserLoggedInAtom  = atom({
    key : 'isUserLoggedIn' ,
    default : false
})

  export const IspostAtom = atom({
    key:"tweet",
    default:postData,
  })
  
  export const loggedInUserAtom = atom ({
    key : 'loggedInUser' ,
    default : null 
})