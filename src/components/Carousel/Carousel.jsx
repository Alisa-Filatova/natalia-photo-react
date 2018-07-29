import React from "react";
import Slider from "react-slick";
import './Carousel.less';

const SLIDES = [
  {
    title: 'Portrait',
    link: '/portrait',
  },
  {
    title: 'Newborn',
    link: '/newborn',
  },
  {
    title: 'Wedding',
    link: '/wedding',
  },
  {
    title: 'Family',
    link: '/family',
  },
  {
    title: 'Event',
    link: '/event',
  },
  {
    title: 'Maternity',
    link: '/maternity',
  },
];

export default class Carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        {SLIDES.map((item) => (
          <div className='slide' key={item.title}>
            <h3>{item.title}</h3>
            <a href={item.link}>Browse gallery</a>
          </div>
        ))}
      </Slider>
    );
  }
}