import React from 'react'
import John from '../images/john.jpeg'

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={John} alt=" " />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={John} alt=" " />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={John} alt=" " />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats