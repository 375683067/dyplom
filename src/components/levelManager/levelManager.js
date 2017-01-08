import React from 'react';
import './levelManager.scss';
import * as LEVEL_CONFIGURATION from '../../constants/levelConfigurations';
import {SUB_LEVELS_INFORMATION} from '../../constants/levelConfigurationInfo';
import {generateLevelId} from '../../utils/helper';
import LevelContent from '../levelContent/levelContent';
import Scene from '../scene/scene';

import Code from '../levelContent/code';



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

    this.sceneComponents = [];
    this.CONFIGURATION = null;

    this.state = {
      currentSubLevel: 1
    };
    this.SUB_LEVELS_COUNT = SUB_LEVELS_INFORMATION[this.LEVEL_ID].subLevelsCount;

    const UNIQUE_LEVEL_ID = generateLevelId(this.LEVEL_ID, this.state.currentSubLevel);

    this.CONFIGURATION = LEVEL_CONFIGURATION[UNIQUE_LEVEL_ID];
    this.CONFIGURATION.initSceneComponents.call(this);
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
    let run = this.CONFIGURATION.codeRunner;
    run.call(this, this.code);
  }
  /**
   *
   */
  render() {
    return (
      <div className="md-level-manager">

        <div className="md-level-manager__header">
          <span>Level {this.getLevelLabelId()} </span>
          <span>{this.CONFIGURATION.topic}</span>
        </div>

        <div className="md-level-manager__content">
          <div className="md-level-information-section">
            <LevelContent configuration={this.CONFIGURATION.info}/>
          </div>
          <div className="md-level-code-section">
            <Scene sceneItemList={this.sceneComponents}/>
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
