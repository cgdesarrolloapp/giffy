import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOdGifs';

import { Link, Route } from "wouter";

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/autos">Autos</Link>
        <Link to="/gif/aviones">Aviones</Link>
        <Link to="/gif/barcos">Barcos</Link>
          <Route path="/gif/:keyword" component={ListOfGifs} />
          {/* <button onClick={() => setKeyword('Superman')}>Cambiar gif</button>  */}
          {/* <ListOfGifs keyword='panda'/> */}
      </section>
    </div>
  );
}

