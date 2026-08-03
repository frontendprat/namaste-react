import React from "react";
import ReactDOM from "react-dom/client";
/**
 * <div id="parent">
 *  <div id="child">
 *      <h1>I'm h1 tag</h1>
 *      <h2>I'm h2 tag</h2>
 *   </div>
 * </div>
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }),
  [
    React.createElement("h1", { id: "headingChild" }, "I'm h1 tag"),
    React.createElement("h2", { id: "headingChild2" }, "I'm h2 tag"),
  ], // Array of children (sibling)
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React",
);

console.log(heading); // object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // converts the object in to the html needed
