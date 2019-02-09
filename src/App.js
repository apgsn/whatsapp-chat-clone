import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <section id="main">
          <Sidebar />
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
