import React, { Component } from "react";

import CardList from "./components/Card-List/cardList.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter((elm) =>
      elm.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <input
          type="search"
          placeholder="serach .."
          onChange={(e) => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterdMonsters} />
      </div>
    );
  }
}

export default App;
