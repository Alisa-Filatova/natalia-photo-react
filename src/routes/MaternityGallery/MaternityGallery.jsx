import React from "react";
import Gallery from 'react-grid-gallery';
const MATERNITY = require('./maternity.json');

export default class MaternityGallery extends React.Component {
  render() {
    return <Gallery images={MATERNITY} enableImageSelection={false} rowHeight={300} />;
  }
}