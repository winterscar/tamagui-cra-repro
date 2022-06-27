import React from 'react';
import logo from './logo.svg';
import { Text } from 'react-native'
import {Provider} from 'app/provider'
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Text>Hello world</Text>
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
    </Provider>
  );
}

export default App;
