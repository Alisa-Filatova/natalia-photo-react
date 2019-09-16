import React from 'react';
import { Gallery, MetaTags, ScrollToTopOnMount } from '../../components';
import MATERNITY from './maternity.json';

const MaternityGallery = () => (
  <>
    <MetaTags title="Maternity" />
    <ScrollToTopOnMount />
    <Gallery
      images={MATERNITY}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default MaternityGallery;
