import React from 'react'
import './App.css';
import Login from './components/Login'
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';

function App() {
  const user = null
  return (
    //?BEM naming convention

    <div className="app">
      {!user ? (<Login />) : (

        <>
          < Header />
          {/*//* app body  */}
          <div className="app__body">
            {/*//* sidebar */}
            <Sidebar />
            {/*//* Feed */}
            <Feed />
            {/*//* widgets */}
            <Widget />

          </div>
        </>

      )
      }



    </div >
  );
}

export default App;
