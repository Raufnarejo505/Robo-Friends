import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {cats} from './cats.js';



export default function App() {
  return (
    <div className="tc">
        <h1>Cat Companion</h1>
        <Searchbox/>
        <Cardlist cats={cats}/>
    </div>
  )
}
