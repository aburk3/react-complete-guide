import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Austin", age: 24 },
      { name: "Mallory", age: 22 },
      { name: "Dylan", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  deletePersonHandler = personIndex => {
    /**
     * In order to not manipulate the state directly
     * make a copy of the state using slice() w/o an argument
     */
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // removes the person from the array that corresponds to the index
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Austin", age: 24 },
        { name: event.target.value, age: 22 },
        { name: "Dylan", age: 27 }
      ]
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* using javaScript to return valid JSX  */}
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
