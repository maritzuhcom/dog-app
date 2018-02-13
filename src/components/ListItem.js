import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './listItem.css';

export default class ListItem extends Component {
  static defaultProps = {
    name: 'dog',
  }

  static propTypes = {
    name: PropTypes.string,
  }

  clickHandler = () => {
    console.log(this.props.name);
  }

  render() {
    return (
      <main className="itemWrapper">
        <div
          className="item"
          onClick={this.clickHandler}
        >
          {this.props.name}
        </div>
      </main>
    );
  }
}
