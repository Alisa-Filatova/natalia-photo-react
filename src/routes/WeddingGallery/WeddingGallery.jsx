import React from 'react';
import Gallery from 'react-grid-gallery';
import WEDDING from './wedding.json';

const WeddingGallery = () => (
  <Gallery
    images={WEDDING}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default WeddingGallery;
