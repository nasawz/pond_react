import pixi from 'pixi.js';
import React, { PropTypes } from 'react';
import { TilingSprite } from 'react-pixi';

import AnimationStore from "../../stores/AnimationStore.js";

export default class Overlay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tilePosition: {
        x: 0,
        y: 0
      }
    }

    AnimationStore.addChangeListener(this.animationHandler.bind(this));
  }

  animationHandler() {
    let tick = AnimationStore.get('tick');
    let count = tick / 10;
    this.setState({
      tilePosition: {
        x: count * -10,
        y: count * -10
      }
    });
  }

  render() {
    return (<TilingSprite tilePosition={this.state.tilePosition} alpha={0.1} width={window.innerWidth} height={window.innerHeight} key='Overlay' image={require('./zeldaWaves.png')} />);
  }
}

Overlay.propTypes = {
};
