import React from 'react';
import { Gallery, MetaTags, ScrollToTopOnMount } from '../../components';
import EVENT from './event.json';

const EventGallery = () => (
  <>
    <MetaTags title="Event" />
    <ScrollToTopOnMount />
    <Gallery
      images={EVENT}
      enableImageSelection={false}
      rowHeight={300}
    />
  </>
);

export default EventGallery;
