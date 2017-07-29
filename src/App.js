import React, { Component } from "react";
import BrowserRouter from "react-router-dom/BrowserRouter";

// ====== components =========
import routes from "./routes";

// ====== Assets & styles ========
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    );
  }
}

export default App;
