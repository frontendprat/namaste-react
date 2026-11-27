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
    console.log(props.name + " constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/frontendprat");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + " componentDidMount");
  }
  render() {
    const { name, bio, html_url, avatar_url } = this.state.userInfo;
    console.log(this.props.name + " render");
    return (
      <div className="group relative mx-auto mt-2 w-full max-w-sm overflow-hidden rounded-3xl border border-line bg-panel pb-8 text-center shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        {/* gradient banner with soft glow blobs */}
        <div className="relative h-24 overflow-hidden bg-linear-to-br from-sakura via-violet to-violet">
          <span className="absolute -left-4 -top-6 size-24 rounded-full bg-white/20 blur-2xl" />
          <span className="absolute -bottom-8 right-6 size-20 rounded-full bg-night/30 blur-xl" />
          <span className="absolute right-5 top-4 text-lg text-white/80">
            ✦
          </span>
          <span className="absolute left-6 top-8 text-xs text-white/60">✦</span>
        </div>

        {/* avatar overlapping the banner; placeholder until the fetch finishes */}
        {avatar_url ? (
          <img
            className="relative mx-auto -mt-14 size-28 rounded-full border-[5px] border-panel object-cover shadow-glow ring-2 ring-sakura"
            alt={name || "user-logo"}
            src={avatar_url}
          />
        ) : (
          <div className="relative mx-auto -mt-14 size-28 animate-pulse rounded-full border-[5px] border-panel bg-panel-raised ring-2 ring-line" />
        )}

        <h2 className="text-gradient mt-4 px-7 font-display text-2xl">
          {name}
        </h2>

        {bio && (
          <p className="mt-3 px-8 text-sm italic leading-relaxed text-ink-mid">
            {bio}
          </p>
        )}

        <a
          className="mx-8 mt-6 flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-sakura to-violet px-5 py-3 font-display text-xs uppercase tracking-wider text-night shadow-glow transition hover:scale-[1.03] hover:brightness-110 active:scale-95"
          href={html_url}
          target="_blank"
          rel="noreferrer"
        >
          ⎘ Github
        </a>
      </div>
    );
  }
}

export default UserClass;
