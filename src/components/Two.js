import React from "react";

class Two extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props:", props);
    // console.log("Constructor Class Two!");

    this.state = {
      count: 1,
      text: "Hello Two",
    };

    // console.log("this.state:", this.state);
    // console.log("this.props:", this.props);
  }

  // componentDidMount() {
  //   console.log("Class component Two mounted!");
  // }

  // componentDidUpdate() {
  //   console.log("Class component two state is updated!");
  // }

  // componentWillUnmount() {
  //   console.log("Component two will unmount");
  // }

  render() {
    const { data, additionalData } = this.props;
    const { count, text } = this.state;

    // console.log("render class Two called!");

    return (
      <div className="Two-container">
        <h2>Class component - Two</h2>
        <p>{data}</p>
        <p>Additional data from parent component: {additionalData}</p>
        <span>
          <p>Another state from class Two: {text}</p>
          <h3>Count:</h3> &nbsp; {count}
        </span>{" "}
        &nbsp;
        <span>
          <button
            onClick={() => {
              this.setState({ count: count + 1 });
            }}
          >
            +
          </button>
        </span>
      </div>
    );
  }
}

export default Two;
