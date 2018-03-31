import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Textarea from "./Textarea";
import Markdown from "react-markdown";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Jumbotron
} from "reactstrap";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Markdown Previewer</h1>
        </header>
        <Container className="Markdown full-height">
          <Row>
            <Col xs="6">
              <Form>
                <FormGroup>
                  <Input
                    type="textarea"
                    name="text"
                    id="exampleText"
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Form>
            </Col>
            <Col xs="6">
              <div className="preview">
                <Markdown source={this.state.value} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

export default App;
