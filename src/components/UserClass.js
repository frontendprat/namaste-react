import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/frontendprat");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, bio, html_url, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img className="user-logo" alt="user-logo" src={avatar_url} />
        <h2 className="user-name">{name}</h2>
        <h2 className="user-bio">{bio}</h2>
        <h2 className="login-btn btn">
          <a href={html_url} target="_blank" rel="noreferrer">
            Github
          </a>
        </h2>
      </div>
    );
  }
}

export default UserClass;
