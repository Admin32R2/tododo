
import './App.css';
import { useState } from 'react';

function App() {

  const [something, setsomething] = useState(0);
  const [somethingAD1, setsomethingAD1] = useState(1);

  function handleClick() {
    setsomething(something + 1);
   
  }

  function handleClickAD1() {
    setsomethingAD1(somethingAD1 + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h1>Press me!</h1>
        <MyButton something={something} onClick={handleClick} />
        <MyButton something={something} onClick={handleClick} />
        <MyButton somethingAD1={somethingAD1} onClick={handleClickAD1} />
        <MyButton somethingAD1={somethingAD1} onClick={handleClickAD1} />
      </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
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

function MyButton({somethingAD1, something, onClick}) {
 

  return (
    <button onClick={onClick}>
      Clicked {something} {somethingAD1}  timesss!!
    
    </button>
  )
}



function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

export default App;


