import React from "react";
import ReactDOM from "react-dom/client";
import { store } from './state';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <div>Hello!</div>
  </Provider>
);
