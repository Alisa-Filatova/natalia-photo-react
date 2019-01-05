import React from 'react';
import { observer } from 'mobx-react';
import { Gallery }  from '../../components';
const PORTRAIT = require('./portrait.json');

class PortraitGallery extends React.Component {
  render() {
    return <Gallery images={PORTRAIT} enableImageSelection={false} rowHeight={300} />;
  }
}

export default observer(PortraitGallery);
