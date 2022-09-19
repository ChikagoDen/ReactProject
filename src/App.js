import './App.css';

import Message from "./Message";

import dz2 from "./dz2";
import MessagesList from "./dz2";

function App() {
    let myName = 'Den';
  return (
      <div className="App">
          <header className="App-header"> React</header>
          <div>
              <h2>Первое дз</h2>
              My First React App
              <h3>Hello world!</h3>{myName}
              <Message myName={myName}/>
          </div>
<hr/>
          <div>
              <h2>Второе дз</h2>
              <MessagesList/>
          </div>
<hr/>
      </div>
  );
}

export default App;
