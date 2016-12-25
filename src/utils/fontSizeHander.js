/**
 * handle font-size over viewport
 */
class FontSizeHandler {
  /**
   *
   * @param {number} ar - width/height
   */
  constructor({ar}) {
    this.ar = ar;
    this.viewport = document.getElementsByTagName('html')[0];
    window.addEventListener('resize', this.handleSize.bind(this));
    this.handleSize();
  }
  /**
   * sets viewport font-size according to make our page scalable
   */
  handleSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width/height > this.ar) {
      this.viewport.style.fontSize = `${this.$getPercentFromValue(height, 1.6842105263157894)}px`;
    } else {
      this.viewport.style.fontSize = `${this.$getPercentFromValue(width, 1.6842105263157894)}px`;
    }
  }
  /**
   * @param {number} value
   * @param {number} [percent]
   * return 1% from value
   */
  $getPercentFromValue(value, percent = 1) {
    return value / 100 * percent;
  }
}
export default FontSizeHandler;
