import React from 'react'
import './App.css';
import Login from './components/Login'
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Widget from './components/Widget';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
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
