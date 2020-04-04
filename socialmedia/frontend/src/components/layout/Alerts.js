import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  // componentDidMount(){
  //   this.props.alert.show("it works")
  // }

  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    // Error Conditions
    if (error !== prevProps.error) {
      if (error.msg.title) {
        alert.error(`Title: ${error.msg.title}`);
      }
      if (error.msg.body) {
        alert.error(`Post: ${error.msg.body}`);
      }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors);
      }
      if (error.msg.username) {
        alert.error(error.msg.username);
      }
    }

    // Messages Conditions
    if (message !== prevProps.message) {
      if (message.addPost) {
        alert.success(message.addPost);
      }
      if (message.deletePost) {
        alert.success(message.deletePost);
      }
      if (message.PasswordsNotMatch) {
        alert.error(message.PasswordsNotMatch);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
