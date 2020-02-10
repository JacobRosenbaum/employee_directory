import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import SearchForm from "./SearchForm";
import EmpInfo from "./EmpInfo";
import EmpList from "../data/employees.json";
import Navbar from "./Navbar";

class EmpContainer extends Component {
  state = {
    result: [],
    search: ""
  };

  componentDidMount() {
    this.searchEmp();
  }

  searchEmp = () => {
    const searchQuery = this.state.search.trim();
    const searchResults = EmpList.filter((emp) => emp.firstName === searchQuery);
    this.setState({ 'result': searchResults });
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchEmp();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-4" />
          <Col size="md-4">
            <SearchForm
              searchtype="Employee"
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-4" />
        </Row>
        <Row>
          <Col size="md-12">
            <hr />
            <EmpInfo search={this.state.search} />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default EmpContainer;
