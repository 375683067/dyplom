import SceneItem from '../scene/sceneItem';
import staticPenguin from './penguin.jpg';
import penguinWalk from './penguin_walk.jpg';
import penguinJump from './penguin_jump.jpg';

const STATIC_PENGUIN = 'staticPenguin';
const PENGUIN_WALK = 'asagsdfsa';
const PENGUIN_JUMP = 'asdfdfdfghhkjbvkuyasd';

class Penguin extends SceneItem {
  /**
   *
   */
  constructor(configuration) {
    super(configuration);

    this.jumpSprite = null;
    this.walkSprite = null;
    this.intervalId = null;

    this.currentState = STATIC_PENGUIN;

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
    switch(this.currentState) {
      case STATIC_PENGUIN:
        this.drawImage(PENGUIN_JUMP);
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
