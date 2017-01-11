import {DO_LOGIN, OPEN_NEXT_LEVEL} from '../constants/actions';
export default function userInfo (state = {user:'', openLevel: 0}, action) {
  switch (action.type) {
    case DO_LOGIN:
      state = {
        user: action.login,
        openLevel: 10
      };
      break;
    case OPEN_NEXT_LEVEL:
      state = JSON.parse(JSON.stringify(state));
      state = {
        user: state.user,
        openLevel: ++state.openLevel
      };
      break;
  }
 return  state;
}
