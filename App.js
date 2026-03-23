import React from "react";
import ReactDOM from "react-dom/client";
import One from "./src/components/One";
// import Two from "./src/components/Two";

class App extends React.Component {
  constructor() {
    super();
    // console.log("Constructor called!");

    this.state = {
      one: 1,
      two: "Data from Parent to Child 2",
      status: true
    };

    // console.log(this);
  }

  // componentDidMount() {
  //   console.log("App component mounted!");
  // }

  // componentDidUpdate() {
  //   console.log("Parent component updated!");
  // }

  // componentWillUnmount() {
  //   console.log("Component is unmounting");
  // }

  render() {
    // console.log("render called!");

    return (
      <div className="app-container">
        <h1>React class components</h1>

        <h2>App component-Parent</h2>
        <p>{this.state.one}</p>
        <button onClick={() => this.setState({ one: this.state.one + 1 })}>
          Increment from App component
        </button> &nbsp;

        <button onClick={() => this.setState({ status: !this.state.status })}>
          Toggle timer
        </button>

        {this.state.status && (<One data={this.state.one} />) }
        {/* <Two data={this.state.two} additionalData={this.state.one} />  */}
      
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
