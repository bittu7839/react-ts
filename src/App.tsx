import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import AddToList from "./components/AddToList";

export interface IState {
	people: {
		name: string
		age: number
		url: string
		note?: string
	}[]
}
function App() {
	const [people, setPeople] = useState<IState['people']>([
		{
			name: 'Bittu kumar',
			age: 27,
			url: 'https://pbs.twimg.com/media/E3qLUV5VkAAwq5P?format=jpg&name=large',
			note: 'Devloper'
		}
	]);
	return (
		<div className="App">
			<h1>People Invited to my Party</h1>
			<div className="listPanel">
				<List people={people} />
			</div>
			<div className="addToListForm">

			<AddToList people={people} setPeople={setPeople}/>
			</div>
		</div>
	);
}

export default App;
