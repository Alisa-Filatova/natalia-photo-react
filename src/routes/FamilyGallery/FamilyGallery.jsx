import React from 'react';
import { Gallery }  from '../../components';
const FAMILY = require('./family.json');

export default class FamilyGallery extends React.Component {
  render() {
    return <Gallery images={FAMILY} enableImageSelection={false} rowHeight={300} />;
  }
}