import React from 'react';
import { Gallery, MetaTags }  from '../../components';
import PORTRAIT from './portrait.json';

const PortraitGallery = () => (
  <>
    <MetaTags title="Portrait" />
    <Gallery
      images={PORTRAIT}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default PortraitGallery;
