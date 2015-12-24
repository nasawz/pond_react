import pixi from 'pixi.js';
import React, { Component } from 'react';
import { Stage, Sprite, VectorText, DisplayObjectContainer } from 'react-pixi';

import AnimationStore from "./stores/AnimationStore.js";
import Background from "./components/Background/Background.jsx";
import Fish from "./components/Fish/Fish.jsx";
import Overlay from "./components/Overlay/Overlay.jsx";
import TEXTURE from "./filters/WeveFilter/displacement_map.jpg";
import WeveFilter from "./filters/WeveFilter/weveFilter.js";

const SPEED = 0.005;
export class App extends Component {

  constructor() {
    super();
    this.state = {
      rotation: 0
    };
    this.animate();
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    AnimationStore.emitChange();
  }
  componentDidMount() {
    let displacementSprite = new pixi.Sprite.fromImage(TEXTURE);
    var weveFilter = new WeveFilter(displacementSprite);
    this.refs.app.addChild(displacementSprite);
    this.refs.app.filters = [weveFilter];
  }

  renderFish() {
    let fishs = [];
    for (var i = 0; i < 10; i++) {
      fishs.push(<Fish key={i} fishId={i} />)
    }
    return fishs;
  }
  render() {
    return (
      <Stage ref='stage' width={this.props.width} height={this.props.height}>
        <DisplayObjectContainer ref='app'>
        <Background width={10} height={20}/>
        { this.renderFish() }
        <Overlay />
        </DisplayObjectContainer>
        </Stage>
      );
  }
}
App.defaultProps = {

  width: window.innerWidth,
  height: window.innerHeight
}
