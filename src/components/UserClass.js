import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 2,
    };
  }
  render() {
    const { name, location, github } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h2 className="user-name">Name: {name}</h2>
        <h2 className="user-location">Location: {location}</h2>
        <h2 className="user-github">Github: {github}</h2>
      </div>
    );
  }
}

export default UserClass;
