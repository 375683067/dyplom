import React from 'react';
import './levelManager.scss';
import * as LEVEL_CONFIGURATION from '../../constants/levelConfigurations';
import {SUB_LEVELS_INFORMATION} from '../../constants/levelConfigurationInfo';
import {generateLevelId} from '../../utils/helper';
import LevelContent from '../levelContent/levelContent';
import Scene from '../scene/scene';
import Penguin from '../characters/penguin';
import Code from '../levelContent/code';
import Environment from '../enviroments/mountains';
import controller from '../../utils/controllers/penguinController';

class LevelManager extends React.Component {
  /**
   *
   */
  constructor(props) {
    super();
    this.LEVEL_ID = parseInt(props.params.id);
    this.code = '';

    this.character = null;
    this.environment = null;

    this.state = {
      currentSubLevel: 1
    };
    this.SUB_LEVELS_COUNT = SUB_LEVELS_INFORMATION[this.LEVEL_ID].subLevelsCount;

    this.initSceneComponents();
  }
  /**
   *
   */
  initSceneComponents() {
    this.character = new Penguin({x: 0, y: 0, width: 130, height: 150});
    this.environment = new Environment({x: 0, y: 0, width: 0, height: 0});
    controller(this.character, this.environment);
  }
  /**
   *
   */
  getLevelLabelId() {
    let label = '';
    if (this.SUB_LEVELS_COUNT > 1) {
      label = this.LEVEL_ID;
    } else {
      label = `${this.LEVEL_ID}.${this.state.currentSubLevel}`;
    }
    return label;
  }
  /**
   *
   */
  nextPart() {
    this.setState({
      currentSubLevel: ++this.state.currentSubLevel
    });
  }
  /**
   *
   */
  finishLevel() {
    this.props.finishLevel();
  }
  /**
   *
   */
  getNexButton() {
    let nextSubLevel = <div className="md-level-manager__button" onClick={this.nextPart.bind(this)}>next</div>;
    let finish = <div onClick={this.finishLevel.bind(this)} className="md-level-manager__button">finish</div>;
    let toReturn;
    if (this.SUB_LEVELS_COUNT > 1) {
      if (this.state.currentSubLevel === this.SUB_LEVELS_COUNT) {
        toReturn = finish;
      } else {
        toReturn = nextSubLevel;
      }
    } else {
      toReturn = finish;
    }
    return toReturn;
  }
  /**
   *
   */
  onCodeChanged(val) {
    this.code = val;
  }
  /**
   *
   */
  runCode() {
    function run () {
      let penguin = this.character;
      eval(this.code);
    }

    run.call(this, this.code);
  }
  /**
   *
   */
  render() {
    const UNIQUE_LEVEL_ID = generateLevelId(this.LEVEL_ID, this.state.currentSubLevel);
    const CONFIGURATION = LEVEL_CONFIGURATION[UNIQUE_LEVEL_ID];
    return (
      <div className="md-level-manager">

        <div className="md-level-manager__header">
          <span>Level {this.getLevelLabelId()} </span>
          <span>{CONFIGURATION.topic}</span>
        </div>

        <div className="md-level-manager__content">
          <div className="md-level-information-section">
            <LevelContent configuration={CONFIGURATION.info}/>
          </div>
          <div className="md-level-code-section">
            <Scene sceneItemList={[this.environment, this.character]}/>
            <Code readOnly={false} onChange={this.onCodeChanged.bind(this)}/>
          </div>
        </div>

        <div className="md-level-manager__control-buttons">
          {this.getNexButton()}
          <div className="md-level-manager__button" onClick={this.runCode.bind(this)}>run</div>
        </div>

      </div>
    );
  }
}

export default LevelManager;
