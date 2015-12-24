import pixi from 'pixi.js';
import React, { PropTypes } from 'react';
import { Sprite } from 'react-pixi';

export default class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let scale = {
      x: 1.3,
      y: 1.3
    }
    return (<Sprite scale={scale} key='bg' image={require('./Background.jpg')} />);
  }
}

Background.propTypes = {
};
