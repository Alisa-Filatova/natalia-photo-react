import React from 'react';
import Gallery from 'react-grid-gallery';
const EVENT = require('./event.json');

export default class EventGallery extends React.Component {
  render() {
    return <Gallery images={EVENT} enableImageSelection={false} rowHeight={300} />;
  }

}