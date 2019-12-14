import React, { Component } from "react";
import TodoList from "./TodoList";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>
            Todo<span>App</span>
          </h1>
          <h2>A simple todo app built with React, Redux & MongoDB for Assignment Challange</h2>
        </header>
        <TodoList />
        <a
          style={{ display: "flex", justifyContent: "center", fontSize: 15, color:"#5d3ebd" }}
          href="https://github.com/serkaneken/todoApp"
        >
          <strong>View source on GitHub @Serkan Eken</strong>
        </a>
      </div>
    );
  }
}



export default App;
