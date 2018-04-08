import React from 'react';
import './image.css';

// TODO change image string with props
const DogImageItem = props => (
  <main className="image">
    <img
      src={props.pic}
      alt="pup"
    />
  </main>
);

export default DogImageItem;
