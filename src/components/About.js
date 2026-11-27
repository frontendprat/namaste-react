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
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-12 max-md:px-4 max-md:pt-8">
        <div className="text-center">
          <span className="text-2xl text-sakura">✦</span>
          <h1 className="text-gradient mt-2 font-display text-4xl uppercase tracking-wide max-md:text-3xl">
            About
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-mid">
            This is my first React project, built from scratch.
          </p>
        </div>

        <h2 className="mb-8 mt-14 flex items-center gap-4 font-display text-lg uppercase tracking-wider text-ink">
          About me
          <span className="h-px flex-1 bg-linear-to-r from-sakura/60 via-violet/40 to-transparent" />
        </h2>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
          <UserClass
            name={"Child 1"}
            location={"Pune"}
            github={"https://github.com/frontendprat"}
          />
        </div>
      </div>
    );
  }
}

export default About;
