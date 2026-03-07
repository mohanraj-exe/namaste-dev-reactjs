import React from "react";
import ReactDOM from "react-dom/client";
const myLogo = new URL(
  "./assets/alin.jpg?as=webp",
  import.meta.url,
);
const myUser = new URL(
  "./assets/jurica.jpg?as=webp",
  import.meta.url,
);

console.log(myLogo);

// Method 01-Creating h1, h2, h3 inside a div with class "title"
const nestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "" }, "This is h1 tag!"),
  React.createElement("h2", { id: "" }, "This is h2 tag!"),
  React.createElement("h3", { id: "" }, "This is h3 tag!"),
]);

// Method 02-Above one with JSX
const nestedHeader1 = (
  <div id="title">
    <h1>This is a 'h1' header tag!</h1>
    <h2>This is a 'h2' header tag!</h2>
    <h3>This is a 'h3' header tag!</h3>
  </div>
);

// Method 03-Create a functional component of the same with JSX
const NestedHeader2 = () => (
  <div id="title">
    <h1 id="heading-1">This is a 'h1' header tag!</h1>
    <h2 id="heading-2">This is a 'h2' header tag!</h2>
    <h3 id="heading-3">This is a 'h3' header tag!</h3>
  </div>
);

const ArticleComponent = () => (
  <article>
    <h2>Heading tag 2</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </article>
);

const FooterComponent = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>
);

// Method 04-Create a functional component of the same with JSX
const MainComponent = () => (
  <div className="main">
    <ArticleComponent />
    <FooterComponent />
  </div>
);

// #02. Create a Header Component from scratch using Functional Components with JSX

const LogoComponent = () => (
  <>
    <img id="logo" src={myLogo} alt="logo" width={100} height={100} />
  </>
);

const SearchBarComponent = () => (
  <>
    <span className="search-bar-container">
      <input
        type="search"
        placeholder="Give input here..."
      ></input>
    </span>
  </>
);

const UserComponent = () => (
  <>
    <img id="user-icon" src={myUser} alt="user" width={60} height={60} />
  </>
);

const HeaderComponent = () => {
  return (
    <div className="header-component">
      <LogoComponent />
      <SearchBarComponent />
      <UserComponent />
    </div>
  );
};

const nestedHeaderRoot = ReactDOM.createRoot(
  document.getElementById("coding-assignment"),
);

nestedHeaderRoot.render(<HeaderComponent />);
