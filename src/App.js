import React from 'react'
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    //?BEM naming convention
    <div className="app">

      {/*//? Header */}
      <Header />
      {/*//Todo app body  */}
      <div className="app__body">
        {/*//Todo sidebar */}
        <Sidebar />
      </div>

      {/*//Todo Feed */}
      {/*//Todo widgets */}
    </div>
  );
}

export default App;
