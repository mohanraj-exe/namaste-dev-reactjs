import React from "react";

class One extends React.Component {
  constructor(props) {
    super(props);
    // console.log("props:", props);
    // console.log("Constructor Class One!");

    this.state = {
      count: 1,
      text: "Hello one",
    };

    // console.log("this.state:", this.state);
    // console.log("this.props:", this.props);
  }

  componentDidMount() {
    console.log("Mounted!");
    this.timer = setInterval(() => {
    console.log("Running...");
    }, 1000);
  }

  // componentDidUpdate() {
  //   console.log("Class component one state is updated!");
  // }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Unmounted");
  }

  render() {
    const { data } = this.props;
    const { count, text } = this.state;

    // console.log("render class one called!");

    return (
      <div className="one-container">
        <h2>Class component-One</h2>
        <p>{data}</p>
        <span>
          <p>Another state from class One: {text}</p>
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

export default One;
