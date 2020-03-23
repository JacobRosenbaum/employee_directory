
import React from "react";
import "../styles/style.css"

function SortKey(props) {
  return(
  <div>
    <div className="card text-center">
      <div className="card-header">
        <h2>Sort By</h2>
      </div>
      <form class = "formInfo" style = {{textAlign: "left", marginLeft: "10px", paddingLeft: "65px" }}>
        <input onChange={props.handleInputChange} type="radio" id="firstName" name="sortKey" value="firstName" />
        <label style = {{marginLeft: "4px"}} for="firstName">  First Name</label><br />
        <input onChange={props.handleInputChange} type="radio" id="lastName" name="sortKey" value="lastName" />
        <label style = {{marginLeft: "4px"}} for="lastName">Last Name</label><br />
        <input onChange={props.handleInputChange} type="radio" id="department" name="sortKey" value="department" />
        <label style = {{marginLeft: "4px"}} for="department">Department</label><br />
        <input onChange={props.handleInputChange} type="radio" id="title" name="sortKey" value="title" />
        <label style = {{marginLeft: "4px"}} for="title">Title</label><br />
      </form>
    </div>
  </div>)
}

export default SortKey;