import React from "react";
import { Gallery }  from '../../components';
const MATERNITY = require('./maternity.json');

export default class MaternityGallery extends React.Component {
  render() {
    return <Gallery images={MATERNITY} enableImageSelection={false} rowHeight={300} />;
  }
}