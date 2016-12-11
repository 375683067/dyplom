import {connect} from 'react-redux';
import MenuItem from '../components/menu/menuItem';
import {push} from 'react-router-redux';
import {TO_LOGIN} from '../constants/path';

function mapStateToProps({userInfo: {openLevel}}) {
  return {
    openLevel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openLevel(levelPath) {
      dispatch(push(levelPath));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
