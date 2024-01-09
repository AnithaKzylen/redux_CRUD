import { all } from "redux-saga/effects";
import { watchProductSaga } from "./ProductSaga";

export function* watcherSaga() {
  yield all([
    watchProductSaga(),
  ]);
}
