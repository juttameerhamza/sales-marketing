import { all, fork } from "redux-saga/effects";
import salesSaga from "./sales";

export default function* rootSaga() {
  yield all([fork(salesSaga)]);
}