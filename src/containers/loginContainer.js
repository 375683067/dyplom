import {connect} from 'react-redux';
import Login from '../components/login/login';
import {doLogin} from '../actions/actions';
import {push} from 'react-router-redux';
import {TO_MENU} from '../constants/path';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    doLogin(login, password) {
      dispatch(doLogin(login, password));
      dispatch(push(TO_MENU));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
