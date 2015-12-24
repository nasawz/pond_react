import pixi, { Rectangle } from 'pixi.js';
import React, { PropTypes } from 'react';
import { Sprite } from 'react-pixi';

import AnimationStore from "../../stores/AnimationStore.js";

export default class Fish extends React.Component {



  constructor(props) {
    super(props);

    this.skin = require('./displacement_fish1.png')

    let padding = 50;
    this.bounds = new Rectangle(-padding, -padding, window.innerWidth + padding * 2, window.innerHeight + padding * 2);
    let scale = 0.4 + Math.random() * 0.3;
    this.state = {
      anchor: {
        x: 0.5,
        y: 0.5
      },
      direction: Math.random() * Math.PI * 2,
      speed: 2 + Math.random() * 2,
      turnSpeed: Math.random() - 0.8,
      position: {
        x: Math.random() * this.bounds.width,
        y: Math.random() * this.bounds.height
      },
      scale: {
        x: scale,
        y: scale
      },
      rotation: 0
    }

    AnimationStore.addChangeListener(this.animationHandler.bind(this));
  }

  animationHandler() {
    let direction = this.state.direction;
    let new_direction = direction + this.state.turnSpeed * 0.01;

    let position = this.state.position;
    let new_position = {
      x: position.x + Math.sin(new_direction) * this.state.speed,
      y: position.y + Math.cos(new_direction) * this.state.speed
    }
    if (new_position.x < this.bounds.x)
      new_position.x = new_position.x + this.bounds.width;
    if (new_position.x > this.bounds.x + this.bounds.width)
      new_position.x = new_position.x - this.bounds.width

    if (new_position.y < this.bounds.y)
      new_position.y = new_position.y + this.bounds.height;
    if (new_position.y > this.bounds.y + this.bounds.height)
      new_position.y = new_position.y - this.bounds.height
    let new_rotation = -new_direction - Math.PI / 2;


    this.setState({
      direction: new_direction,
      position: new_position,
      rotation: new_rotation
    });
  }

  componentWillMount() {
    switch (this.props.fishId) {
      case 1:
        this.skin = require('./displacement_fish1.png')
        break;
      case 2:
        this.skin = require('./displacement_fish2.png')
        break;
      case 3:
        this.skin = require('./displacement_fish3.png')
        break;
      case 4:
        this.skin = require('./displacement_fish4.png')
        break;
      default:
        this.skin = require('./displacement_fish1.png')
        break;
    }
  }

  render() {
    return (<Sprite anchor={this.state.anchor}
      rotation={this.state.rotation}
      speed={this.state.speed}
      direction={this.state.direction}
      turnSpeed={this.state.turnSpeed}
      position={this.state.position}
      scale={this.state.scale}
      image={this.skin} />);
  }
}

Fish.propTypes = {
};
