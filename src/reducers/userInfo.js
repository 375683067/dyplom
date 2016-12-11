import {DO_LOGIN} from '../constants/actions';
export default function userInfo (state = {user:'', openLevel: 0}, action) {
  switch (action.type) {
    case DO_LOGIN:
      state = {
        user: action.login,
        openLevel: 0
      };
      break;
  }
 return  state;
}
