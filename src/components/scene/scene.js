import React from 'react';

class Scene extends React.Component {
  /**
   * {Array} props.sceneItemList
   */
  constructor(props) {
    super();
    this.canvas = null;
    this.context = null;
    this.subscribeForChanges(props.sceneItemList);
  }
  /**
   *
   * @param props
   */
  componentWillReceiveProps(props) {
    this.subscribeForChanges(props.sceneItemList);
    this.drawScene(props.sceneItemList);
  }
  /**
   *
   */
  subscribeForChanges(sceneItemList) {
    sceneItemList.forEach((sceneItem) => {
      sceneItem.on('change', () => {
        this.clearScene();
        this.drawScene(sceneItemList);
      });
    });
  }
  /**
   *
   */
  clearScene() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  /**
   *
   * @param {node} canvas
   */
  onSceneCreated(canvas) {
    if (canvas !== null) {
      this.canvas = canvas;
      this.context = canvas.getContext('2d');
      this.drawScene(this.props.sceneItemList);
    }
  }

  /**
   * @param props
   */
  drawScene(sceneItemList) {
    sceneItemList.forEach((renderItem)=> {
      renderItem.draw(this.context, this.canvas.width, this.canvas.height);
    });
  }
  /**
   *
   * @returns {XML}
   */
  render() {
    return <canvas width="910" height="400" ref={this.onSceneCreated.bind(this)}/>;
  }
}

Scene.propTypes = {
  sceneItemList: React.PropTypes.array.isRequired
};

export default Scene;
