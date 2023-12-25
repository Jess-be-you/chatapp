import React from 'react'
import { MdVideocam } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { IoPersonAdd } from "react-icons/io5";
import Messages from './Messages';
import Input from './Input'

function Chat() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jane</span>
        <div className="chatIcons">
        <MdVideocam />
        <IoPersonAdd />
        <IoMdMore />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat