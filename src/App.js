import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Austin", age: 24 },
      { name: "Mallory", age: 22 },
      { name: "Dylan", age: 25 }
    ]
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
          My Hobbies: Racing
        </Person>
      </div>
    );
  }
}

export default App;
