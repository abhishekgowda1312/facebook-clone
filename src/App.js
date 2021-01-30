import React from 'react'
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    //?BEM naming convention
    <div className="app">

      {/*//? Header */}
      <Header />
      {/*//* app body  */}
      <div className="app__body">
        {/*//* sidebar */}
        <Sidebar />
        {/*//* Feed */}
        <Feed />
      </div>


      {/*//Todo widgets */}
    </div>
  );
}

export default App;
