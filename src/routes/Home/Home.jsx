import React from 'react';
import { observer } from 'mobx-react';
import { Carousel } from '../../components';

class Home extends React.Component {

  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }

}

export default observer(Home);
