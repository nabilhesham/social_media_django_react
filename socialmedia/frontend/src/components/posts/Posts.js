import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts, deletePost } from "../../actions/posts";

export class Posts extends Component {
  static proptypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    return (
      <Fragment>
        <div className="posts-list">
          <h2>Posts:</h2>
          <hr />
          {this.props.posts.map(post => (
            <div key={post.id} className="container post">
              <h5>
                <span>No.</span>({post.id}) <span>Title:</span> {post.title}
              </h5>
              <hr />
              <p>{post.body}</p>
              <button
                className="btn btn-danger btn-md"
                onClick={this.props.deletePost.bind(this, post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts
});

export default connect(mapStateToProps, { getPosts, deletePost })(Posts);
