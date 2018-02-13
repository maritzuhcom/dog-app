import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import map from 'lodash/map';

import { getDogs } from '../actions/dogs';
import ListItem from './ListItem';
import './listView.css';


class ListView extends Component {
  static defaultProps = {
    dispatchGetDogs: () => {},
    dogList: [],
  }

  static propTypes = {
    dispatchGetDogs: PropTypes.func,
    dogList: PropTypes.array,
  }

  componentWillMount() {
    this.props.dispatchGetDogs();
  }

  populateDogs = () => map(this.props.dogList, (dogName, i) => (
    <ListItem name={dogName} key={i} />
  ))

  render() {
    return (
      <main className="listView">
        {this.populateDogs()}
      </main>
    );
  }
}

function mapReduxStateToProps(state) {
  return { dogList: state.dogs.dogList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchGetDogs: getDogs,
  }, dispatch);
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(ListView);
