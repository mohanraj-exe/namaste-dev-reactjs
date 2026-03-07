import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "header" },
  "Heading from react element!",
);

// const heading = React.createElement("h1", {
//   id: "header",
//   children: "Heading from react element!",
// });

// JSX -> Babel transpiles it to React.createElement ->
// React Element (object) -> When we renders element on DOM that becomes html element.

// JSX - HTML-like or XML-like syntax
const jsxHeading = (
  <h1 id="header" className="headerClass">
    Namaste react using JSX
  </h1>
);

console.log(heading);
console.log(jsxHeading);
// Both prints a react element object

// Title component
const Title = () => (
  <h1 className="title" tabIndex={5}>
    Namaste react using JSX
  </h1>
);

// JSX-Title element
const title = (
  <h1 className="title" tabIndex={5}>
    Namaste react using react element.
  </h1>
);
// React Functional component
// const HeadingComponent = function () {
//   return <h1>Heading component!</h1>;
// };

// const HeadingComponent = () => {
//   return <h1>Heading component!</h1>;
// };

const HeadingComponent = () => (
  <div>
    {/* <Title /> */}
    {title} // title inside the curly braces are sanitized for usage.
    (Cross-side scripting)
    <p className="paragraph">This is a paragraph component!</p>
  </div>
);

console.log(Title);
console.log(title);

const HeadingComponent1 = () => (
  <div>
    {title}
    {Title()}
    <Title />
    <Title></Title>

    {/* Above three are same */}
    <p className="paragraph">This is a paragraph component!</p>
  </div>
);

// above both code is valid.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent1 />);
