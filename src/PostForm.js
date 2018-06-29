import React, { Component } from "react";
import { connect } from "react-redux";
class PostForm extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       age: ""
  //     };
  //   }
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    console.log(data);
    //addPost method from mapDispatchToProps
    this.props.addPost(data);
    //remove the value after adding the data to store
    this.getTitle.value = "";
    this.getMessage.value = "";
  };

  //   handleChange = e => {
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.value;
  //     this.setState({
  //       [name]: value
  //     });
  //   };

  render() {
    return (
      <div>
        <h1>Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            // name="name"
            type="text"
            placeholder="Enter Post Title"
            ref={input => (this.getTitle = input)}
            //onChange={this.handleChange}
          />
          <br />
          <textarea
            required
            cols="28"
            rows="5"
            placeholder="Enter Post"
            ref={input => (this.getMessage = input)}
          />
          <br />
          <button type="submit">Post</button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addPost: data => {
      dispatch({ type: "ADD_POST", data });
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(PostForm);
