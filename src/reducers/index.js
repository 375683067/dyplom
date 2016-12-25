import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import userInfo from './userInfo';
import FontSizeHandler from '../utils/fontSizeHander';

let fontSizeHandler = new FontSizeHandler({ar:1.777});

const rootReducer = combineReducers( {
  userInfo,
  routing: routerReducer
});

export default rootReducer;
