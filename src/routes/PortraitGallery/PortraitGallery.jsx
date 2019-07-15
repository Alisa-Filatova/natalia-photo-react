import React from 'react';
import { Gallery }  from '../../components';
const PORTRAIT = require('./portrait.json');

const PortraitGallery = () => (
  <Gallery
    images={PORTRAIT}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default PortraitGallery;
