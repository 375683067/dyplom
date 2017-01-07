import SceneItem from '../scene/sceneItem';
import staticPenguin from './penguin.png';
import penguinWalk from './penguin_walk.png';
import penguinJump from './penguin_jump.png';

import {STATIC_PENGUIN, PENGUIN_WALK, PENGUIN_JUMP} from '../../constants/penguinActions';
/**
 * @event 'stateChanged' - notify about penguin's state is changed
 */
class Penguin extends SceneItem {
  /**
   *
   */
  constructor(configuration) {
    super(configuration);

    this.jumpSprite = null;
    this.walkSprite = null;
    this.intervalId = null;

    this.changePenguinState(STATIC_PENGUIN);
    this.initImages();
  }
  /**
   * uploads images
   */
  initImages() {
    //image of penguin stays on the place
    this.initImage(STATIC_PENGUIN, staticPenguin);
    //image of penguin jumps
    this.initImage(PENGUIN_JUMP, penguinJump, {
      chunkCount: 3,
      loop: false
    }).then((sprite)=> {
      this.jumpSprite = sprite;
      this.jumpSprite.on('stopped', this.onJumpEnded.bind(this));
    });
    //image of penguin walk
    this.initImage(PENGUIN_WALK, penguinWalk, {
      chunkCount: 4,
      loop: true
    }).then((sprite) => {
      this.walkSprite = sprite
    });
  }
  /**
   *
   */
  changePenguinState(state) {
    this.currentState = state;
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.emit('stateChanged', state);
  }
  /**
   *
   */
  onJumpEnded() {
    this.stop();
  }
  /**
   *
   */
  walk() {
    this.changePenguinState(PENGUIN_WALK);
    this.intervalId = setInterval(()=> {
      this.walkSprite.next();
      this.changed();
    }, 200);
  }
  /**
   *
   */
  jump() {
    this.changePenguinState(PENGUIN_JUMP);
    this.jumpSprite.toStart();
    this.intervalId = setInterval(()=> {
      this.jumpSprite.next();
      this.changed();
    }, 200);
    this.changed();
  }
  /**
   *
   */
  stop() {
    this.changePenguinState(STATIC_PENGUIN);
    this.changed();
  }
  /**
   * @override
   */
  draw(context, width, height) {
    super.draw(context, width, height);
    this.y = height - this.height;
    this.x = 0.5 * width - 0.5 * this.width;
    switch(this.currentState) {
      case STATIC_PENGUIN:
        this.drawImage(STATIC_PENGUIN);
        break;
      case PENGUIN_WALK:
        this.drawImage(PENGUIN_WALK);
        break;
      case PENGUIN_JUMP:
        this.drawImage(PENGUIN_JUMP);
        break;
    }
  }
}

export default Penguin;
