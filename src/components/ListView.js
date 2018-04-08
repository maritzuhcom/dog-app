import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { getDogs } from '../actions/dogs';
import map from 'lodash/map';
import './listView.css';

class ListView extends Component {
  componentWillMount() {
    this.props.dispatchGetDogs();
  }

  renderDogNames = () => map(this.props.dogNames, dogName => (
    <ListItem text={dogName} key={dogName} />
  ));

  render() {
    console.log(this.renderDogNames());
    return (
      <main className="listView">
        {this.renderDogNames()}
      </main>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchGetDogs: getDogs,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    dogNames: state.dogs.dogNames,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
