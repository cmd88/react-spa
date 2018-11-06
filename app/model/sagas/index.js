import { fork, all } from 'redux-saga/effects';
import sagaOne from './sagaOne';

export default function* () {
  yield all([
    fork(sagaOne),
  ]);
}
