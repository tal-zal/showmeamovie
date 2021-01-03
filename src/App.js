import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Show Me A Movie </h1>
        <img src='logoReel.png' className="App-logo" alt="logo" />
        <p>
          Enter your desired movie criteria, and SMAM will choose a movie for you to watch!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Generate Movie
        </a>
      </header>
    </div>
  );
}

export default App;
