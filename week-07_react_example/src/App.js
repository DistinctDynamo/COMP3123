import logo from './logo.svg';
import './App.css';
import Student from "./Student"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Student/>
      </header>
    </div>
  );
}

export default App;
