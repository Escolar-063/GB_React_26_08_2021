import logo from './logo.svg';
import './App.css';
// import { SimpleText } from './components/SimpleText';
import { Message } from './components/Message';

function App() {
  return (
    <div className="App App-text">
      <Message text="Создал компонент Message, отображающий переданный ему пропсом текст."/>
    
      {/* <SimpleText name="Igor++" age={33} someObj={{a: 1}} /> */}
    
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
