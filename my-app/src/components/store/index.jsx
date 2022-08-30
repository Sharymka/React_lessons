import { createStore } from "redux";
import { checkboxReducer } from "../reducers/languageReducer";

const extension =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let extension2 = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : window.__REDUX_DEVTOOLS_EXTENSION__;

const store = createStore(checkboxReducer, extension);

export { store };
