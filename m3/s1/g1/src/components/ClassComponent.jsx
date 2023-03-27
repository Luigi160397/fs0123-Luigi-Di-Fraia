import { Component } from "react";

class ClassComponent extends Component {
  render() {
    return <div>Saluto: {this.props.content}</div>;
  }
}

export default ClassComponent;
