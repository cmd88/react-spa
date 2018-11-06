import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducerOne from './reducerOne';

export default combineReducers({
  reducerOne,
  form: formReducer,
});
