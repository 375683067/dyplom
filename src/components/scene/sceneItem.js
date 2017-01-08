import EventEmitter from 'event-emitter-es6';
import Sprite from '../../utils/sprite';
/**
 * the parent of all scene items
 * @event change
 * @abstract
 */
class SceneItem extends EventEmitter {
  /**
   *
   * @param {object} configuration
   * @param {number} configuration.x
   * @param {number} configuration.y
   * @param {number} configuration.width
   * @param {number} configuration.height
   */
  constructor(configuration) {
    super();
    this.$context = null;
    this.$canvasWidth = null;
    this.$canvasHeight = null;
    this.x = configuration.x;
    this.y = configuration.y;
    this.width = configuration.width;
    this.height = configuration.height;
    this.$images = {};
  }
  /**
   *
   */
  changed() {
    this.emit('change');
  }
  /**
   *
   * @param {string | Symbol} name
   * @param {string} url
   * @param {object} [options]
   * @param {number} options.chunkCount
   * @param {number | boolean} options.loop
   */
  initImage(name, url, options) {
    return new Promise((resolve, reject)=> {
      let image = new Image();

      image.src = url;
      image.onerror = reject;
      image.onload = () => {
        if (options && options.chunkCount) {
          console.info('ini sprite');
          this.$images[name] = new Sprite(name, image, options);
        } else {
          this.$images[name] = image;
        }
        resolve(this.$images[name]);
        this.changed();
      };
    });
  }

  update(canvas) {

  }

  drawImage(imageName) {
    if (this.$images[imageName]) {
      if (this.$images[imageName] instanceof Sprite) {
        let sprite = this.$images[imageName];
        let {dx, dy, width, height} = sprite.current();
        this.$context.drawImage(sprite.image, dx, dy, width, height, this.x, this.y, this.width, this.height);
      } else {
        this.$context.drawImage(this.$images[imageName], this.x, this.y, this.width, this.height);
      }
    } else {
      console.warn('image doesn\'t specified or loaded');
    }
  }
  /**
   *
   * @param prop -  'x', 'y', 'width', 'height'
   * @returns {number}
   */
  getProp(prop) {
    let toReturn = null;
    switch (prop) {
      case 'x':
        toReturn = this.x;
        break;
      case 'y':
        toReturn = this.y;
        break;
      case 'width':
        toReturn = this.width;
        break;
      case 'height':
        toReturn = this.height;
        break;
    }
    return toReturn;
  }

  /**
   *
   * @param {string} prop
   * @param {*} value
   */
  setProp(prop, value) {
    let toReturn = null;
    switch (prop) {
      case 'x':
        this.x = value;
        break;
      case 'y':
        this.y = value;
        break;
      case 'width':
        this.width = value;
        break;
      case 'height':
        this.height = value;
        toReturn = this.x;
        break;
    }
  }
  /**
   *
   * @param {CanvasRenderingContext2D} context
   * @param {number} width
   * @param {number} height
   */
  draw(context, width, height) {
    this.$context = context;
    this.$canvasWidth = width;
    this.$canvasHeight = height;
  }
}

export default SceneItem;
