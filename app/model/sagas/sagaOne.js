import { call, takeLatest } from 'redux-saga/effects';
import * as actionsOne from 'actions/actionsOne';
import { getRequestTwo } from 'utils/request';
import setting from 'setting';

function* sagaOneFunction({ payload }) {
  try {
    const data = yield call(getRequestTwo, 'test param');
    console.log('sagaOneFunction is called');
    console.log(data);
    console.log(payload);
    console.log(setting);
  } catch (exception) {
    console.log(exception);
  }
}

export default function* () {
  console.log('saga export');
  console.log(actionsOne);
  yield takeLatest(actionsOne.addSomeProp, sagaOneFunction);
}
