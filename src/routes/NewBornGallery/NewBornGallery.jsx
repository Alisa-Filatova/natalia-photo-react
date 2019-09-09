import React from 'react';
import { Gallery, MetaTags }  from '../../components';
import NEWBORN from './newborn.json';

const NewBornGallery = () => (
  <>
    <MetaTags title="Newborn" />
    <Gallery
      images={NEWBORN}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default NewBornGallery;
