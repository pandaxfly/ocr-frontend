import logo from './logo.svg';
import './App.css';
import Tesseract  from '../node_modules/tesseract.js'

function App() {

  function handleChange(e) {
    Tesseract.recognize(e.target.files[0], 'eng',{ 
      logger: m => document.getElementById('status').innerHTML = m.status
    })
    .then(({ data: { text } }) => {
      document.getElementById('result').innerHTML = text;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" onChange={handleChange} />
        <p id='status'></p>
        <br />
        <p id='result'></p>
      </header>
    </div>
  );
}

export default App;
