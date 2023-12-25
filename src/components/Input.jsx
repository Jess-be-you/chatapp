import React from 'react'
import { LuImagePlus } from "react-icons/lu";
import { IoSendSharp } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";

function Input() {
  return (
    <div className="input">
      <input type="text" placeholder='Type Your message'/>
      <div className="send">
        {/* <img src={attach} alt=" "/>
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file" >
          <img src="fileadd" alt=" " />
        </label> */}
      <MdAttachFile />
      <LuImagePlus />
      <IoSendSharp />
      {/* <button><IoSendSharp /></button> */}
      </div>
    </div>
  )
}

export default Input