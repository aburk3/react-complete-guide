import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.module.css";
import AuthContext from "../../context/auth-context";

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);

  // useEffect is componentDidMount and componentDidUpdate in one effect
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    // Http request...
    // setTimeout(() => {
    //   alert("Saved data to cloud!");
    // }, 1000);
    /**
     * toggleBtnRef must be in useEffect because
     * .current is null until it is set below on
     * the actual button
     */
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>

      <button onClick={authContext.login}>Log in</button>
    </div>
  );
};

export default React.memo(Cockpit);
