import React from 'react';
import { Gallery }  from '../../components';
const NEWBORN = require('./newborn.json');

const NewBornGallery = () => (
  <Gallery
    images={NEWBORN}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default NewBornGallery;
