import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import './Carousel.less';

const SLIDES = [
  {
    description: 'Portrait',
    link: '/portrait',
    original: '/img/slides/4.jpg',
    middle: '/img/slides/4-tablet.jpg',
    small: '/img/slides/4-mobile.jpg'
  },
  {
    description: 'Newborn',
    link: '/newborn',
    original: '/img/slides/2.jpg',
    middle: '/img/slides/2-tablet.jpg',
    thumbnail: '/img/slides/2-mobile.jpg'
  },
  {
    description: 'Wedding',
    link: '/wedding',
    original: '/img/slides/3.jpg',
    middle: '/img/slides/3-tablet.jpg',
    thumbnail: '/img/slides/3-mobile.jpg'
  },
  {
    description: 'Family',
    link: '/family',
    original: '/img/slides/1.jpg',
    middle: '/img/slides/1-tablet.jpg',
    thumbnail: '/img/slides/1-mobile.jpg'
  },
  {
    description: 'Event',
    link: '/event',
    original: '/img/slides/5.jpg',
    middle: '/img/slides/5-tablet.jpg',
    thumbnail: '/img/slides/5-mobile.jpg'
  },
  {
    description: 'Maternity',
    link: '/maternity',
    original: '/img/slides/6.jpg',
    middle: '/img/slides/6-tablet.jpg',
    thumbnail: '/img/slides/6-mobile.jpg'
  },
];

const Carousel = () => (
  <ReactBootstrapCarousel
    version={4}
    slideshowSpeed={8000}
  >
    {SLIDES.map((item, idx) =>
      <div
        className="item"
        key={item.description}
      >
        <picture>
          <source
            media="(max-width:475px)"
            srcSet={item.thumbnail}
          />
          <source
            media="(max-width:768px)"
            srcSet={item.middle}
          />
          <img src={item.original} alt={`${idx} slide`} />
        </picture>
        <div>
          <div className="carousel-caption">
            <h1>{item.description}</h1>
            <p>
              <NavLink
                className="btn"
                to={item.link}
                role="button"
              >
                Browse gallery
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    )}
  </ReactBootstrapCarousel>
);

export default Carousel;
