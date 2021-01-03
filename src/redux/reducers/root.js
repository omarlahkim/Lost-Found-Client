import {combineReducers} from '@reduxjs/toolkit';
import user from './user';
import object from './object';

export default combineReducers({
  user,
  object,
});
