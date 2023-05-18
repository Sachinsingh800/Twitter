import React, { useEffect, useState } from "react";
import { FaTwitter } from "react-icons/fa";
import Button from "../../../../../Atom/Button/Button"
import style from "./Account.module.css";
import Input from "../../../../../Atom/Input/Input";
import MonthDropdown from "../Month/Month";
import YearDropdown from "../Year/Year";
import DayDropdown from "../Day/Day";
import {isUserLoggedInAtom ,loggedInUserAtom }  from "../../../../../RecoilState/RecoilAtom"
import {useNavigate} from 'react-router-dom'
import { useSetRecoilState } from "recoil";




import { 
  isValidEmailSyntax ,
  isValidMobile,
  isOnlyLetters,
  isValidString,
  isValidPassword ,
} from '../../../../../../src/Helper/Helper'



function Account() {
  const[input,setInput]=useState({
    "Name":"",
    "Email":"",
    "Phone":"",
    "Password":""
  })
  const navigate = useNavigate()
  const [toggle, setToggle] = useState(false);
  const [Name, setName] = useState(" ");
  const [Email, setEmail] = useState(" ");
  const [Phone, setPhone] = useState(" ");
  const [Password, setPassword] = useState(" ");
  const setUserLoginStatus = useSetRecoilState(isUserLoggedInAtom)
  const setLoggedInUser = useSetRecoilState(loggedInUserAtom)
const [data,setData] = useState([])

const [islogin,setLogin]= useState(false)


console.log(setUserLoginStatus)

useEffect(()=>{
 if(JSON.parse(localStorage.getItem("userData"))){
  const newData=JSON.parse(localStorage.getItem("userData"))
  setData(newData)
 }

},[])




  function submitFunction(e){
    e.preventDefault()
    setLogin(true)

    if(!isValidString(Name))
    {
      alert("add proper Name")
      return
    }
    if(toggle===true)
    {
      if(!isValidMobile(Phone))
      {
        alert("add proper PhoneNumber ")
        return
      }
    }
    else
    {
        if(!isValidEmailSyntax(Email))
      {
        alert("Give correct email")
        return
      }  
     
  }
  
    if(!isValidPassword(Password))
    {
          alert('add strong Password !!')
           return
    }
    data.push(userData)
    setData(data)
    localStorage.setItem('userData',JSON.stringify(data))
    localStorage.setItem('loginUser',JSON.stringify(userData))
    alert("successfully submited")
    setLoggedInUser(userData)
        setUserLoginStatus(true)
     
        console.log(islogin)
        navigate("/HomePage")
}





  const userData = {
    id: Math.floor(Math.random() * 1000) ,
    Name ,
...(Phone && {Phone}),
...(Email && {Email}),
   Password,
   islogin,
}


  function emailLogin() {
    setToggle(!toggle);
  }

  function HandlePhone(InputPhone) {
    setPhone(InputPhone);
   
  }

  function HandleEmail(InputEmail) {
    setEmail(InputEmail);
  }

  function HandleName(InputName) {
    setName(InputName);
  }
  function HandlePassword(InputPassword) {
    // console.log(Password)
    setPassword(InputPassword);
  }



  return (
    <div className={style.main}>
      <form className={style.form}>
      <FaTwitter className={style.logo} />
        <h1 >Create your account</h1>
        <Input  customStyleInput={style.input} placeholder={"Name"} type="text"  handleOnChange={HandleName} />
        {toggle ? (
          <div>
            <Input  customStyleInput={style.input} placeholder={"Phone"} type="text" handleOnChange={HandlePhone} />
          </div>
        ) : (
          <div>
            <Input  customStyleInput={style.input} placeholder={"Email"} type="text"  handleOnChange={HandleEmail} />
          </div>
        )}
        <span onClick={emailLogin} className={style.useemail}>
          {toggle ? (
            <h6
              style={{
                color: "#2997f1",
                marginLeft: "12.5rem",
                marginTop: "7px",
              }}
            >
              Use email instead
            </h6>
          ) : (
            <h6
              style={{
                color: "#2997f1",
                marginLeft: "12.5rem",
                marginTop: "7px",
              }}
            >
              Use Phone instead
            </h6>
          )}
        </span>
        <Input  customStyleInput={style.input1}  placeholder={"Password"} type="password"  handleOnChange={HandlePassword}/>
        <div className={style.Dob}>
          <h5 >Date of birth</h5>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={style.date}>
       <span><MonthDropdown /></span> 
        <span><DayDropdown /></span>
        <span><YearDropdown /></span>
        </div>
        </div>

        <span className={style.login}>
          <Button handleClick={submitFunction} SignUpTxt={"Next"} />
        </span> 
      </form>
    </div>
  );
}

export default Account;







