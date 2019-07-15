import React from 'react';
import { Gallery }  from '../../components';
const FAMILY = require('./family.json');

const FamilyGallery = () => (
  <Gallery
    images={FAMILY}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default FamilyGallery;
