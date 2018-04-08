import React, { Component } from 'react';
import DogImageItem from './DogImageItem';
import { connect } from 'react-redux';
import map from 'lodash/map';
import './dogImages.css';

class DogImages extends Component {
  renderDogImages = () => map(this.props.dogPics, dogPic => (
    <DogImageItem pic={dogPic} />
  ));

  render() {
    return (
      <main className="dogImages">
        {this.renderDogImages()}
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    dogPics: state.dogs.dogPics,
  };
}

export default connect(mapStateToProps)(DogImages);
