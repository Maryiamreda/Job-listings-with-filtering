import { useState } from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Wrapper from './components/wrapper';
import bg from './assets/bg-header-desktop.svg';

function App() {
  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 20vh',
        minHeight: '100vh',
      }}
    >
      <header className="App-body">
        <div >
          <Wrapper />
        </div>
      </header>
    </div>
  );
}

export default App;