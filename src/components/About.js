import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent ComponentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="about-page">
        <h1>About</h1>
        <h2>This is my first React project, built from scratch.</h2>
        <h2>About me:</h2>
        <UserClass
          name={"Pratik Vyas"}
          location={"Pune"}
          github={"https://github.com/frontendprat"}
        />
      </div>
    );
  }
}

export default About;
