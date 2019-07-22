import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactBootstrapCarousel from 'react-bootstrap-carousel';
import './Carousel.less';

const SLIDES = [
  {
    description: 'Portrait',
    link: '/portrait',
  },
  {
    description: 'Newborn',
    link: '/newborn',
  },
  {
    description: 'Wedding',
    link: '/wedding',
  },
  {
    description: 'Family',
    link: '/family',
  },
  {
    description: 'Event',
    link: '/event',
  },
  {
    description: 'Maternity',
    link: '/maternity',
  },
];

const Carousel = () => (
  <ReactBootstrapCarousel
    version={4}
    slideshowSpeed={6000}
  >
    {SLIDES.map((slide) =>
      <div
        className="carousel__item"
        key={slide.description}
      >
        <div className={`slide-${slide.description.toLowerCase()}`}>
          <div className="carousel-caption">
            <h1 className="carousel-caption__title">{slide.description}</h1>
            <p className="carousel-caption__description">
              <NavLink
                className="btn"
                to={slide.link}
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
