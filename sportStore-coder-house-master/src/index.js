import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { firebaseConfig } from "./config/firebase.config";

import {
  FirebaseAppProvider
} from 'reactfire'


ReactDOM.render(
  <React.StrictMode>
    (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <App />
      </FirebaseAppProvider>
      )
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
