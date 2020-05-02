import React from "react";
import "./App.scss";
import HeaderDefault from "./components/Header";
import HeaderFixed from "./components/Header/HeaderFixed";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HeaderDefault />
        <HeaderFixed />
      </div>
    );
  }
}

export default App;
