import React from 'react';
import { Gallery }  from '../../components';
import EVENT from './event.json';

const EventGallery = () => (
  <Gallery
    images={EVENT}
    enableImageSelection={false}
    rowHeight={300}
  />
);

export default EventGallery;
