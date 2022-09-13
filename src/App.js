import './App.css';

import Message from "./Message";

function App() {
    let myName = 'Den';
  return (
      <div className="App">
        <header className="App-header">
          My First React App
          <h3>Hello world!</h3>{myName}
          <Message myName={myName}/>
        </header>
      </div>
  );
}

export default App;
