import { CardList } from "./components/card-list/card-list.component";
import "./App.css";
import { Component } from "react";

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
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <input
          type="search"
          placeholder="Search monsters"
          onChange={(e) => this.setState({ searchField: e.target.value })}
        ></input>
        <CardList monsters={this.state.monsters}></CardList>
      </div>
    );
  }
}

export default App;
