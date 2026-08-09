import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀",
// );
// JSX

// JSX is transpiled before it reaches the JS - PARCEL - Babel

// React Element
const jsxHeading = <h1 className="head">Namaste React 🚀 using JSX</h1>;

// React Components
// Class based componets - old

// Functional components - new (just a js function which returns some jsx)
const Title = () => {
  return (
    <div className="container">
      <h1> This is a title component</h1>
    </div>
  );
};

const elem = <h2>This is elem</h2>;

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      {number}
      {elem}
      <h1> This is a functional React component</h1>
    </div>
  );
};

const number = 10000;
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
