import React from 'react';
import { Lightbox, Gallery } from 'react-images';

export default class PortraitGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: true,
    };
  }

  render() {
    return (
      <Lightbox
        images={
          [
            { src: '/img/portrait-gallery/medium/1.jpg' },
            { src: '/img/portrait-gallery/medium/2.jpg' }
          ]
        }
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }

}
