import React from 'react';
import { Gallery }  from '../../components';
import MATERNITY from './maternity.json';

const MaternityGallery = () => (
  <Gallery
    images={MATERNITY}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default MaternityGallery;
