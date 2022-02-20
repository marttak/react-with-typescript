import React, { useState } from 'react';
import './App.css';
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
      fname: "Gandalf",
      lname: "The Gray",
      age: 24000
    },
    {
      fname: "Frodo",
      lname: "Baggins",
      age: 51
    }
  ])

  return (
    <div className="App">
      <h1>The Fellowship</h1>
        <SortableTable people = {people}/>
        <AddToTable people = {people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

/*
<List people={people}/>
<AddToList people={people} setPeople={setPeople}/>
*/