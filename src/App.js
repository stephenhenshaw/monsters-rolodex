import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		// state exists on the class App
		// default state value
		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	// Life-cycle method
	componentDidMount() {
		// make API request for url
		// fetch request returns a promise
		fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
			response.json().then((users) => this.setState({ monsters: users }))
		);
	}

	// Lexical scoping
	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholder="search monsters"
					handleChange={this.handleChange}
				/>
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
