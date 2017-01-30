import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import message from './auth_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  message
});

export default rootReducer;
