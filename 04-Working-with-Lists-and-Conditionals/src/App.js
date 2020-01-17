import React, { Component } from "react";
//import logo from "./logo.svg";
import Radium from "radium";
import Person from "./Person/Person";
import Validation from "./components/Validation";
import Char from "./components/Char";

import "./App.css";
class App extends Component {
  state = {
    persons: [
      { id: "kj98d", name: "Max", age: 28 },
      { id: "v8ska", name: "Manu", age: 29 },
      { id: "o4dkl", name: "Stephanie", age: 26 }
    ],
    userInput: ""
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
  inputChangeHandler = e => {
    this.setState({
      userInput: e.target.value
    });
  };

  deleteCharHandler = index => {
    const text = this.state.userInput.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({
      userInput: updatedText
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
    const charList = this.state.userInput.split("").map((ch, i) => {
      return (
        <Char
          character={ch}
          key={i}
          clicked={() => this.deleteCharHandler(i)}
        />
      );
    });
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}

        <div>
          <input
            type="text"
            onChange={this.inputChangeHandler}
            value={this.state.userInput}
          />
          <p>{this.state.userInput}</p>
          <Validation textLength={this.state.userInput.length} />
          {charList}
        </div>
      </div>
    );
  }
}

export default Radium(App);
