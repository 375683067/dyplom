import SceneItem from '../scene/sceneItem';
import textPopupURl from './textPopup.png';
const TEXT_BACKGROUND = Symbol('text background');

class TextPopup extends SceneItem {
  constructor(configuration) {
    super(configuration);
    this.centered = configuration.centered;
    this.initImage(TEXT_BACKGROUND, textPopupURl);
    this.text = '';
  }
  /**
   *
   * @param text
   */
  drawText(text) {
    this.text = text;
    this.changed();
  }

  draw(context, width, height) {
    super.draw(context, width, height);
    if (this.centered) {
      this.x = 0.5 * width - 0.5 * this.width;
    }
    this.drawImage(TEXT_BACKGROUND);
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText(this.text, this.x + this.width * 0.5, this.y + 75);
  }
}

export default TextPopup;
