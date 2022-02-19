import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToTable from './components/AddToTable';
import SortableTable from './components/SortableTable';

export interface IState {
  people: {
    fname: string
    lname: string
    age: number
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      fname: "Frodo",
      lname: "Baggins",
      age: 51
    },
    {
      fname: "Gandalf",
      lname: "The Gray",
      age: 24000
    },
  ])

  return (
    <div className="App">
      <h1>The Fellowship</h1>
        <SortableTable data = {people}/>
        <AddToTable people = {people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

/*
<List people={people}/>
<AddToList people={people} setPeople={setPeople}/>
*/