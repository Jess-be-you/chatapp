import React from 'react'
import John from '../images/john.jpeg'

function Message() {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={John} alt=" "/>
        <span>just now</span>
      </div>
      <div className="messageContent">
          <img src={John} alt=" "/>
          <p>How are You</p>
      </div>
    </div>
  )
}

export default Message
