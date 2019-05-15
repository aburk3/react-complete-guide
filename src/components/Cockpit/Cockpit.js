import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const Cockpit = props => {
  // useEffect is componentDidMount and componentDidUpdate in one effect
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    setTimeout(() => {
      alert("Saved data to cloud!");
    }, 1000);
    return () => {
      // runs the last time, since [] means only run once, this will run the first time
      console.log("[Cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => {
      console.log("[Cockpit.js] cleanup work in 2nd useEffect");
    };
    // No second argument (as above) so it will run for each update
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
