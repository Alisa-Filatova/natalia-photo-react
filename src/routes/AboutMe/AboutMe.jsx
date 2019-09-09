import React from 'react';
import { NavLink } from 'react-router-dom';
import Photo from './about-desktop.png';
import Routes from '../index';
import styles from './AboutMe.less';

const AboutMe = () => (
  <section className={styles.root}>
    <div className={styles.photoBox}>
      <img className={styles.photo} src={Photo} alt="" />
    </div>
    <div className={styles.description}>
    <h2 className={styles.title}>Hello, I am Natalia! Welcome to my world!</h2>
    <p>
      I am a creative newborn, children, family portrait and wedding
      photographer based in a beautiful nature in California that
      enjoys working at home!<br/>
      I have shot children, family portraits and other events all over the California.
    </p>
    <p>
      I am a happy, creative person that loves to make beautiful, natural,
      soft, romantic and thoughtful images that reflect my artistic style.<br/>
      I am a wife to one of americans finest, a mum to a two beautiful girls
      who is a sucker for a good love story, ( I have been known to cry at many
      films! You may even notice I often shed a few tears
      behind my camera when capturing people in love! ).<br/>
      I love a happy home full of flowers, candles, laughter, life and
      lots of music.
    </p>
    <p>
      After working hard to get better and better with my camera,
      I decided to turn my passion of photography into a business.
      I never get tired of capturing a family's love or hearing the laughs of
      children after they are done with a silly pose, or the look I see in a
      client's face after handing over their images.
      I hope that one day soon, I will be able to bring my love of photos into
      your home that will fill you with tiny, captured memories that will last
      a lifetime...
    </p>
    <p>
      Please feel free to look through my portfolio for a taste of my work.
      If you are interested in booking a shoot, please just drop me a message on
      my <NavLink className={styles.link} to={Routes[8].path}>Contact</NavLink> page.
    </p>
    </div>
  </section>
);

export default AboutMe;
