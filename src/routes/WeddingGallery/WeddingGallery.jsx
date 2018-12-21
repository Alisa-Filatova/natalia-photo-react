import React from 'react';
import Gallery from 'react-grid-gallery';
const WEDDING = require('./wedding.json');

export default class WeddingGallery extends React.Component {
  render() {
    return <Gallery images={WEDDING} enableImageSelection={false} rowHeight={300} />;
  }
}