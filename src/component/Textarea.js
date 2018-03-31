import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.state = { value: " " };
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div>
        <textarea onChange={this.handleChange.bind(this)} />
        <ReactMarkdown source={this.state.value} />
      </div>
    );
  }
}

export default Textarea;
