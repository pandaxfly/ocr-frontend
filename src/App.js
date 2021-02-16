import logo from './logo.svg';
import './App.css';
import Tesseract  from '../node_modules/tesseract.js'

function App() {

  function handleChange(e) {
    Tesseract.recognize(
      e.target.files[0],
      'eng',{ 
      logger: m => console.log(m) 
    }).then(({ data: { text } }) => {
      console.log(text);
      document.getElementById('result').innerHTML = text;
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="file" onChange={handleChange}></input>
        <pre id='result'></pre>
      </header>
      
    </div>
  );
}

export default App;
