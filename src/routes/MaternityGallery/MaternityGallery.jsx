import React from "react";
import { Gallery }  from '../../components';
const MATERNITY = require('./maternity.json');

const MaternityGallery = () => (
  <Gallery
    images={MATERNITY}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default MaternityGallery;
