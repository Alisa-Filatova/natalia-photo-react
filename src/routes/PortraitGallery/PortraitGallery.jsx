import React from 'react';
import { Gallery }  from '../../components';
import PORTRAIT from './portrait.json';

const PortraitGallery = () => (
  <Gallery
    images={PORTRAIT}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default PortraitGallery;
