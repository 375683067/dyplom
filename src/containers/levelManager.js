import {connect} from 'react-redux';
import LevelManager from '../components/levelManager/levelManager';
import {push} from 'react-router-redux';

function mapStateToProps({userInfo: {openLevel}}) {
  return {
    openLevel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exit() {

    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LevelManager);
