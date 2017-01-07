import SceneItem from '../scene/sceneItem';
import backgroundURL from './mountains.png';

const BACKGROUND = 'sdgasdgasdgsda';

class Mountains extends SceneItem {
  constructor(...args) {
    super(...args);

    this.actualImageHeight = null;
    this.actualImageWidth = null;
    this.aspectRatio = null;

    this.initImages();
  }

  initImages() {
    this.initImage(BACKGROUND, backgroundURL).then((image) => {
      let {width, height} = image;
      this.actualImageHeight = height;
      this.actualImageWidth = width;
      this.aspectRatio = this.actualImageWidth / this.actualImageHeight;
    });
  }

  draw(context, width, height) {
    this.height = height;
    this.width = this.aspectRatio * height;
    super.draw(context, width, height);
    this.drawImage(BACKGROUND);
  }
}

export default Mountains;
