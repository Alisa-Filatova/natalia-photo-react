import React from "react";
import ImageGallery from 'react-image-gallery';
import './Carousel.less';

const SLIDES = [
  {
    description: 'Portrait',
    link: '/portrait',
    original: '/img/slides/4.jpg',
    thumbnail: '/img/slides/4-mobile.jpg'
  },
  {
    description: 'Newborn',
    link: '/newborn',
    original: '/img/slides/2.jpg',
    thumbnail: '/img/slides/2-mobile.jpg'
  },
  {
    description: 'Wedding',
    link: '/wedding',
    original: '/img/slides/3.jpg',
    thumbnail: '/img/slides/3-mobile.jpg'
  },
  {
    description: 'Family',
    link: '/family',
    original: '/img/slides/1.jpg',
    thumbnail: '/img/slides/1-mobile.jpg'
  },
  {
    description: 'Event',
    link: '/event',
    original: '/img/slides/5.jpg',
    thumbnail: '/img/slides/5-mobile.jpg'
  },
  {
    description: 'Maternity',
    link: '/maternity',
    original: '/img/slides/6.jpg',
    thumbnail: '/img/slides/6-mobile.jpg'
  },
];



const Carousel = () => (
  <ImageGallery
    items={SLIDES}
    infinite
    autoPlay
    slideInterval={8000}
    slideDuration={600}
    showBullets
    showThumbnails={false}
    showFullscreenButton={false}
    showPlayButton={false}
  />
);

export default Carousel;
