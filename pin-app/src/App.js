import logo from './pin-app.png';
import './App.css';
import Hello from './Hello';
import JSXExamples from './components/JSXExamples';

function App() {
  return (
    <div className="App">
      <Hello />
      <header className="App-header">
        <JSXExamples />
        <img src={logo} className="App-logo" alt="Pin logo" />
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
      <Hello />
    </div>
  );
}

export default App;
