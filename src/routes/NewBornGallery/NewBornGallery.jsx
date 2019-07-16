import React from 'react';
import { Gallery }  from '../../components';
import NEWBORN from './newborn.json';

const NewBornGallery = () => (
  <Gallery
    images={NEWBORN}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default NewBornGallery;
