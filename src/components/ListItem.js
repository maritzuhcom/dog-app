import React, { Component } from 'react';
import './listItem.css';

export default class ListItem extends Component {
  render() {
    return (
      <main className="itemWrapper">
        <div className="item">
          {this.props.name}
        </div>
      </main>
    );
  }
}
