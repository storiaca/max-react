import React, { Component } from "react";
//import logo from "./logo.svg";

import Person from "./Person/Person";
import ValidationComponent from "./components/ValidationComponent";
import CharComponent from "./components/CharComponent";

import "./App.css";
class App extends Component {
  state = {
    persons: [
      { id: "kj98d", name: "Max", age: 28 },
      { id: "v8ska", name: "Manu", age: 29 },
      { id: "o4dkl", name: "Stephanie", age: 26 }
    ],
    lengthText: 0,
    letter: ""
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
  inputLength = e => {
    const { name, value } = e.target;
    if (name === "title") {
      this.setState({
        lengthText: value.length,
        letter: value
      });
    }
  };
  clearString = () => {
    this.setState({
      lengthText: 0,
      letter: ""
    });
  };
  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;
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
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}

        <div>
          <input type="text" onChange={this.inputLength} name="title" />
          <p> {this.state.lengthText}</p>
          <ValidationComponent textLength={this.state.lengthText} />
          <CharComponent
            letters={this.state.letter}
            onClick={this.clearString}
          />
        </div>
      </div>
    );
  }
}

export default App;
