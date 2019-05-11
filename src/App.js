import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const App = props => {
  /**
   * Hooks setPersonsState function REPLACES the state and doesn't
   * merge like with the state keywork in classmethods
   */
  // useState returns an array with two elements and ALWAYS TWO ELEMENTS
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Austin", age: 24 },
      { name: "Mallory", age: 22 },
      { name: "Dylan", age: 25 }
    ],
    otherState: "some other value"
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Monk-a-million", age: 24 },
        { name: "Mallory", age: 22 },
        { name: "Dylan", age: 25 }
      ]
    });
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        />
        My Hobbies: Racing
      </Person>
    </div>
  );
};

export default App;
