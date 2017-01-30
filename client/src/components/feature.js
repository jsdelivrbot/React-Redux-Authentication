
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class Feature extends Component {


componentDidMount() {
    this.props.fetchMessage(localStorage.getItem('token'));
  }

  renderMessage(){
    let message;
    if (! this.props.message ) {
      message = "Loading...";
    } else {
      message = this.props.message;
    }
    return message;
  }


  render() {
    return (
      <div>{ this.renderMessage() }</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.message.message
  }
}

export default Feature = connect(mapStateToProps, actions)(Feature);
