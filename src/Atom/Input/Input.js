import React, { useState } from "react";
import style from "./Input.module.css";

export default function Input (
  {
      placeholder,
      handleOnChange ,
      type ,
      customStyleInput ,
      value
  }
) {
  return(
      <input 
          placeholder={placeholder}
          onChange = {(e) => handleOnChange(e.target.value)}
          type = {type || 'text'}
          className = {`${style.inputField} ${customStyleInput}`}
          value = {value}
      />
  )
}
