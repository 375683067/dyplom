import React from 'react';
import './levelManager.scss';
import * as LEVEL_CONFIGURATION from '../../constants/levelConfigurations';
import {SUB_LEVELS_INFORMATION} from '../../constants/levelConfigurationInfo';
import {generateLevelId} from '../../utils/helper';
import LevelContent from '../levelContent/levelContent';

class LevelManager extends React.Component {
  /**
   *
   */
  constructor(props) {
    super();
    this.LEVEL_ID = parseInt(props.params.id);
    this.state = {
      currentSubLevel: 1
    };
    this.SUB_LEVELS_COUNT = SUB_LEVELS_INFORMATION[this.id] = this.subLevelsCount;
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
  getNexButton() {
    let nextSubLevel = <div className="md-level-manager__button">next</div>;
    let finish = <div className="md-level-manager__button">finish</div>;
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
            <LevelContent configuration={CONFIGURATION.topic}/>
          </div>
          <div className="md-level-code-section">

          </div>
        </div>

        <div className="md-level-manager__control-buttons">
          {this.getNexButton()}
        </div>

      </div>
    );
  }
}

export default LevelManager;
