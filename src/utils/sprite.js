import EventImitter from 'event-emitter-es6';

class Sprite extends EventImitter {
  /**
   * @event stopped
   * @event loopEnded
   * @param {string} name - id
   * @param {image} image - image node
   * @param {object} options
   */
  constructor(name, image, options) {
    super();

    this.name = name;
    this.image = image;
    this.chunks = [];

    this.chunkCount = options.chunkCount;
    this.loop = options.loop;
    this.currentLoop = 0;
    this.currentChunk = 0;

    this.initChunks(image, options.chunkCount);
  }
  /**
   * switch pointer to next
   */
  next() {
    this.currentChunk++;
    //chunks comes to end
    if (this.currentChunk === this.chunkCount) {
      this.emit('loopEnded');
      this.currentLoop++;
      if (this.loop) {
        if (this.loop === true) {
          this.currentChunk = 0;
        } else {
          if (this.currentLoop === this.loop) {
            this.emit('stopped');
            this.currentChunk = this.chunkCount - 1;
          } else {
            this.currentChunk = 0;
          }
        }
      } else {
        this.emit('stopped');
        this.currentChunk = this.chunkCount - 1;
      }
    }

    return this.current();
  }
  /**
   *
   * @returns {*}
   */
  current() {
    let chunk =  this.chunks[this.currentChunk];
    return chunk;
  }
  /**
   * set sprite animation to start
   */
  toStart() {
    this.currentChunk = 0;
    return this.current();
  }
  /**
   *
   * @param image
   * @param chunkCount
   */
  initChunks(image, chunkCount) {
    let width = image.width / chunkCount;
    let i = 0;
    while(chunkCount--) {
      this.chunks.push({
        dx: i++ * width,
        dy: 0,
        width,
        height: image.height
      });
    }
  }
}

export default Sprite;
