import React from "react";
import ReactDOM from "react-dom";
import "../src//styles/index.css";
import App from "./structure/App";
import Header from "./structure/Header";
import Footer from "./structure/Footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById("header")
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

ReactDOM.render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
  document.getElementById("footer")
);

serviceWorker.unregister();
