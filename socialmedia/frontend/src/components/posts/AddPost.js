import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// add post import
import { addPost } from "../../actions/posts";

export class AddPost extends Component {
  state = {
    title: "",
    body: ""
  };

  static propTypes = {
    addPost: PropTypes.func.isRequired
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const { title, body } = this.state;
    const post = { title, body };
    this.props.addPost(post);
    this.setState({
      title: "",
      body: ""
    });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              className="form-control"
              type="text"
              name="title"
              onChange={this.onChange}
              value={title}
            />
          </div>
          <div className="form-group">
            <label>Post</label>
            <input
              className="form-control"
              type="text"
              name="body"
              onChange={this.onChange}
              value={body}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addPost })(AddPost);
