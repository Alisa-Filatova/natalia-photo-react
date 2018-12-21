import React from 'react';
import Gallery from 'react-grid-gallery';
const FAMILY = require('./family.json');

export default class FamilyGallery extends React.Component {
  render() {
    return <Gallery images={FAMILY} enableImageSelection={false} rowHeight={300} />;
  }
}