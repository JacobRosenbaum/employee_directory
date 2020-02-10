import React from "react";
import EmpList from "../data/employees.json";

function EmpInfo(props) {
  console.log(props)

  const results = EmpList.filter( employee => employee.firstName.toLowerCase().includes(props.search.toLowerCase()));

  return (
    <div className="text-center">
      {results.length > 0 ? (
        <ul className="list-group">
          <h2>Employees</h2>
          {results.map(result => (
            <li className="list-group-item" key={result.id}>
              <b>{result.firstName}</b> {result.lastName} {result.title} {result.department}
            </li>
          ))}
        </ul >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
}

export default EmpInfo;
