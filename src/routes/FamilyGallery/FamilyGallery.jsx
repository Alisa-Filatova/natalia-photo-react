import React from 'react';
import { Gallery, MetaTags, ScrollToTopOnMount } from '../../components';
import FAMILY from './family.json';

const FamilyGallery = () => (
  <>
    <MetaTags title="Family" />
    <ScrollToTopOnMount />
    <Gallery
      images={FAMILY}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default FamilyGallery;
