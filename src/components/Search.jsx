import React from 'react'
import John from '../images/john.jpeg'
// import { BiSearchAlt2 } from "react-icons/bi";

function Search() {
  return (
    <div className="search">
      <div className="searchForm">
      {/* <BiSearchAlt2 style={{color: "#ccddff",marginTop:"5px"}} /> */}
      <input type="text" placeholder="Find an user"/>
        <div className="userChat">
          <img src={John} alt=""></img>
          <span className="user">Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search