import React from "react"; 
import "../styles/style.css"


function SearchForm(props) {
  return (
    <div className="card text-center">
      <div className="card-header">
        <h2>{props.searchtype} Search</h2>
      </div>
      <div className="card-body"></div>
      <form>
        <div className="form-group" style={{ padding: '22px' }}>
          <input
            onChange={props.handleInputChange}
            value={props.value}
            searchtype={props.searchtype}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search Employees"
            id="search"
          />
         
        </div>
      </form>
    </div>

  );
}

export default SearchForm;

