import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profileclass";
import Profile2 from "./Profileclass";
import Usercontext from "../utils/Usercontext";

// const About2 = () => {
//   return (
//     <div>
//       About
//       <Profile name="Umang" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <div className="mt-24">
        <Profile name="first" />
        <Usercontext.Consumer>
          {({ user }) => (
            <h1>
              {user.name} - {user.email}
            </h1>
          )}
        </Usercontext.Consumer>
        {/* <Profile2 name="second"/> */}
      </div>
    );
  }
}

export default About;
