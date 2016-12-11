import {connect} from 'react-redux';
import Menu from '../components/menu/menu';
import {push} from 'react-router-redux';
import {TO_LOGIN} from '../constants/path';

function mapStateToProps({userInfo: {openLevel}}) {
  return {
    openLevel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    exit() {
      dispatch(push(TO_LOGIN));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
