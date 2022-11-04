import React from 'react';
import './App.css';
import { YouTubeSearch } from './components/youtube';
import { FlickrSearch } from './components/flickr';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <YouTubeSearch/>
        <br/>
        <FlickrSearch/>
      </header>
    </div>
  );
}

export default App;
