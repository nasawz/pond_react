import React from 'react';
import TWEEN from 'tween.js';
import { render } from 'react-dom';

import AnimationStore from './stores/AnimationStore';
import { App } from './App';

AnimationStore.addChangeListener(() => TWEEN.update());

render(<App />, document.getElementById('pixi-root'));
