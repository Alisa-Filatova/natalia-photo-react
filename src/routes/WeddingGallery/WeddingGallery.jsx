import React from 'react';
import Gallery from 'react-grid-gallery';
import { MetaTags, ScrollToTopOnMount } from '../../components';
import WEDDING from './wedding.json';

const WeddingGallery = () => (
  <>
    <MetaTags title="Wedding" />
    <ScrollToTopOnMount />
    <Gallery
      images={WEDDING}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default WeddingGallery;
