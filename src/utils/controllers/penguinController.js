import {STATIC_PENGUIN, PENGUIN_FALL} from '../../constants/penguinActions';
/**
 *
 * @param {SceneItem} penguin
 * @param {SceneItem} environment
 */
export default (penguin, environment) => {
  let intervalId = null;
  penguin.on('stateChanged', (ACTION) => {
    //clear previous animation loop
    clearInterval(intervalId);

    switch (ACTION) {
      case PENGUIN_FALL:
      case STATIC_PENGUIN:
        break;
      default:
        intervalId = setInterval(()=> {
          let currentPosition = environment.getProp('x');
          let halfWidth = environment.getProp('width') * 0.5;
          if (Math.abs(currentPosition) > halfWidth) {
            environment.setProp('x', 0);
          } else {
            environment.setProp('x', currentPosition - (100 / 1000) * 1000/60); //50px per second
          }
          environment.changed();

        }, 1000/60);
        break;

    }
  })
}
