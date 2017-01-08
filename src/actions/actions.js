import * as actions from '../constants/actions';


export const doLogin = function (login, password) {
  return {
    type: actions.DO_LOGIN,
    login,
    password
  };
};

export const openNextLevel = () => {
  return {
    type: actions.OPEN_NEXT_LEVEL
  }
};
