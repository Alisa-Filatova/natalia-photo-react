import React from 'react';
import { Gallery, MetaTags, ScrollToTopOnMount } from '../../components';
import PORTRAIT from './portrait.json';

const PortraitGallery = () => (
  <>
    <MetaTags title="Portrait" />
    <ScrollToTopOnMount />
    <Gallery
      images={PORTRAIT}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default PortraitGallery;
