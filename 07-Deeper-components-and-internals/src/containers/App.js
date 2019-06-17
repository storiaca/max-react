import React, { Component } from "react";
//import logo from "./logo.svg";
import Person from "../components/Persons/Person/Person";

import classes from "./App.module.css";

class App extends Component {
  state = {
    persons: [
      { id: "kj98d", name: "Max", age: 28 },
      { id: "v8ska", name: "Manu", age: 29 },
      { id: "o4dkl", name: "Stephanie", age: 26 }
    ]
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  };
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null;
    let btnClass = "";
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join("  ")}>This is really working!</p>
        <button onClick={this.togglePersonsHandler} className={btnClass}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
