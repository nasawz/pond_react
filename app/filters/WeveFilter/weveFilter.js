import PIXI from 'pixi.js';

import AnimationStore from "../../stores/AnimationStore.js";

let count = 0;
let displacementSprite;
export default class WeveFilter extends PIXI.filters.DisplacementFilter {

  constructor(texture) {
    displacementSprite = texture;
    super(texture);
    AnimationStore.addChangeListener(this.animationHandler.bind(this));
    this.animationHandler()
  }

  animationHandler() {
    count += 0.1;
    displacementSprite.x = count * 10 //blurAmount * 40;
    displacementSprite.y = count * 10
  }


}
