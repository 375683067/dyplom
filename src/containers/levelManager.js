import {connect} from 'react-redux';
import LevelManager from '../components/levelManager/levelManager';
import {push} from 'react-router-redux';
import {TO_MENU} from '../constants/path';

function mapStateToProps({userInfo: {openLevel}}) {
  return {
    openLevel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    backToMenu() {
      dispatch(push(TO_MENU));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelManager);
