import React, { useState } from 'react';
// import { List, Segment } from 'semantic-ui-react'
import './App.css';

function App() {


  const list = [{ name: "Muhannad" }, { name: "Mohannad" }, { name: "Muhammad" }, { name: "Mohammad" }, { name: "Fida" }, { name: "Shadi" }, { name: "Hadi" }, { name: "Sima" }, { name: "Hani" }, { name: "razan" }, { name: "Hiba" }, { name: "hana" }, { name: "fadi" }]
  const [res, setRes] = useState(list)

  const updateList = (event) => {
    setRes(list.filter(ele => ele.name.toLocaleLowerCase().indexOf(event.target.value) !== -1))
  }

  return (
    <div className="App">

      <div className="ui inverted segment">
        <div role="list" className="ui divided inverted relaxed list">
          {res.map((item, index) => (
            <div key={index} role="listitem" className="item">
              <div className="content">{item.name} </div>
            </div>
          )
          )}
        </div>
      </div>

      <div className="ui icon input">
        <input onChange={updateList} type="text" name="name" placeholder="Search..." />
        <i aria-hidden="true" className="search icon"></i>
      </div>

    </div>
  );
}

export default App;
