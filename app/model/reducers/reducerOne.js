import { handleActions } from 'redux-actions';
import * as actions from 'actions/actionsOne';

const initialState = {
  propOne: false,
  propTwo: 1,
};

export default handleActions({
  [actions.addSomeProp]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
  [actions.getSomeProp]: (state) => ({
    ...state,
  }),
}, initialState);
