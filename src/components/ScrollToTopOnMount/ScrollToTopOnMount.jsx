import React from 'react';

const RESET_SCROLL_TIMEOUT = 0;

class ScrollToTopOnMount extends React.Component {

  componentDidMount() {
    setTimeout(() => window.scrollTo(0, 0), RESET_SCROLL_TIMEOUT);
  }

  render() {
    return null;
  }

}

export default ScrollToTopOnMount;
