import React from 'react';
import { Gallery }  from '../../components';
const NEWBORN = require('./newborn.json');

export default class NewBornGallery extends React.Component {
  render() {
    return <Gallery images={NEWBORN} enableImageSelection={false} rowHeight={300} />;
  }
}