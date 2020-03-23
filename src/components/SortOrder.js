
import React from "react";
import "../styles/style.css"

function SortOrder(props) {
  return(
  <div>
    <div className="card text-center">
      <div className="card-header">
        <h2>Order</h2>
      </div>
      <form class = "formInfo"  style = {{textAlign: "left", marginLeft: "10px", paddingLeft: "65px" }}>
        <input onChange={props.handleInputChange} type="radio" id="1" name="sortOrder" value="1" />
        <label style = {{marginLeft: "4px"}} for="ascending">  Ascending</label><br />
        <input onChange={props.handleInputChange} type="radio" id="-1" name="sortOrder" value="-1" />
        <label style = {{marginLeft: "4px"}} for="descending">  Descending</label>
      </form>
    </div>
  </div>)
}

export default SortOrder;