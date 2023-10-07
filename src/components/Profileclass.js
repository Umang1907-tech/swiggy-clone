import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child - constructor " + this.props.name);
    this.state = {
      userinfo: {
        brand: "dummy name",
        title: "dummy location",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://dummyjson.com/products/1");
    const json = await data.json();
    console.log(json);
    console.log("Child - componentDidMount " + this.props.name);
    this.setState({
      userinfo: json,
    });
    this.timer = setInterval(() => {
      console.log("Namaste react op");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Child - componentDidUpdate "+ this.props.name);
  }

  componentWillUnmount() {
    console.log("Child - componentWillUnmount");
    clearInterval(this.timer);
  }
  render() {
    console.log("Child - render " + this.props.name);
    return (
      <>
        <h1>Profile class component</h1>
        <img src={this.state.userinfo.thumbnail} alt="product_img" />
        <h2>Name:- {this.state.userinfo.brand}</h2>
        <h3>Location:- {this.state.userinfo.title}</h3>
      </>
    );
  }
}

export default Profile;
