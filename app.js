import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" }, // attributes object
    "Hello world from ReactJs"); // children

// Second and third attributes combined are props.

// console.log(heading);
// It does not print heading element.
// It does print an react element 'object' that contains html element.

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// This render method takes heading object converts into a html element and puts up in the DOM.

const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "children" },
        React.createElement("h1", {}, "I'm a h1 tag!"),
    )
);

// console.log(parent);
const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);