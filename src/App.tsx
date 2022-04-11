import React from 'react';
import logo from './logo.svg';
import './App.css';

import { NotionAPI } from 'notion-client';

function App() {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
