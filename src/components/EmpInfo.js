import React from "react";
import EmpList from "../data/employees.json";
import "../styles/style.css"


function EmpInfo(props) {
  console.log(props)

  const results = EmpList.filter( employee => 
    employee.firstName.toLowerCase().includes(props.search.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(props.search.toLowerCase()) ||
    employee.department.toLowerCase().includes(props.search.toLowerCase()) ||
    employee.title.toLowerCase().includes(props.search.toLowerCase()));

    const sort = function(props, results){

    results.sort(function(a, b){

      let x
      let y

        if(props.sortKey === "firstName"){
           x = a.firstName.toLowerCase();
           y = b.firstName.toLowerCase();
        }
        else if(props.sortKey === "lastName") {
           x = a.lastName.toLowerCase();
           y = b.lastName.toLowerCase();
        }
        else if(props.sortKey === "department") {
           x = a.department.toLowerCase();
           y = b.department.toLowerCase();
        }
        else if(props.sortKey === "title") {
           x = a.title.toLowerCase();
           y = b.title.toLowerCase();
        }
        if(props.sortOrder === 1){
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        }
        else{
          if (x < y) {return 1;}
          if (x > y) {return -1;}
          return 0;
        };
      }
    );
    }
  sort(props, results);

  return (
    <div id = "table" className="text-center">
      {results.length > 0 ? (
        //   <h2> Employee Tracker</h2>
        <table border="1" style={{width: '100%'}}>
            <tr style={{fontSize: '24px'}}>
                <th>
                   Name
                </th>
                <th>
                    Title
                </th>
                <th>
                    Department
                </th>
            </tr>
          {results.map(result => (
              <tr style={{fontSize: '17px'}} key={result.id}>
              <td>{result.firstName} {result.lastName}</td>     
              <td>{result.title} </td>    
              <td>{result.department} </td>    
              </tr>
          ))}
        </table >
      ) : (
          <h2>No Results</h2>
        )}
    </div>
  );
      }

export default EmpInfo;
