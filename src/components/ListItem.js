import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getDogPics } from '../actions/dogs';
import './listItem.css';

class ListItem extends Component {
  clickHandler = () => {
    this.props.dispatchGetPics(this.props.text);
  }

  render() {
    return (
      <div
        className="listItem"
        onClick={this.clickHandler}
      >
        {this.props.text}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchGetPics: getDogPics,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(ListItem);
