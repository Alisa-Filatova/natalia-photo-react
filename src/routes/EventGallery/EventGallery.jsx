import React from 'react';
import { Gallery, MetaTags } from '../../components';
import EVENT from './event.json';

const EventGallery = () => (
  <>
    <MetaTags title="Event" />
    <Gallery
      images={EVENT}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default EventGallery;
