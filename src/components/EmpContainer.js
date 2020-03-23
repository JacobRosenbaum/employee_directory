import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmpInfo from "./EmpInfo";
import EmpList from "../data/employees.json";
import Navbar from "./Navbar";
import SortOrder from "./SortOrder";
import SortKey from "./SortKey";
import "../styles/style.css"


class EmpContainer extends Component {
  state = {
    result: [],
    search: "",
  };

  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    const searchEmployees = this.state.search.trim();
    const searchResultsEmp = EmpList.filter((emp) => emp.firstName === searchEmployees);
    this.setState({ 'result': searchResultsEmp });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchEmp();
  };

  render() {
    return (
      <body>
        <Navbar />
        <Container >
          <Row >
            <Col size="md-3">
              <SearchForm style={{ marginTop: '30px' }}
                searchtype="Employee"
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleSubmit}
              />
            </Col>
            <Col size="md-6">
              <EmpInfo search={this.state.search} sortOrder={parseInt(this.state.sortOrder)} sortKey={this.state.sortKey} />
            </Col>
            <Col size="md-3">
              <SortKey handleInputChange={this.handleInputChange}
              />
              <br />
              <SortOrder handleInputChange={this.handleInputChange} />
            </Col>
          </Row>
          <Row>
          </Row>
        </Container >
      </body>
    );
  }
}

export default EmpContainer;
