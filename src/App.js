import React from 'react';
import logo from './logo.svg';
import './App.css';
//import Tesseract  from '../node_modules/tesseract.js';

class App extends React.Component {
  //let uploadedFile = null;
  constructor(props) {
    super(props);
    this.state = { };
  }

  handleChange = (e) => {
    // Call Vision API
    const formData = new FormData();
    formData.append('fileContent', e.target.files[0], 'filename.jpg');
    formData.append('otherdata', 'test.jpg');

    const axios = require('axios');
    axios.post('https://api.yuehao.dev/api/upload', formData)
    .then(res => { // then print response status
      console.log(res)
      document.getElementById('result_vision').innerHTML = res.data.text;
    });

    // Frontend Tesseract Result
    // Tesseract.recognize(e.target.files[0], 'eng',{ 
    //   logger: m => document.getElementById('status').innerHTML = m.status
    // })
    // .then(({ data: { text } }) => {
    //   document.getElementById('result_tess').innerHTML = text;
    // });
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <input type="file" onChange={this.handleChange} /> 
          <br />
          <h3> Tesseract JS Result:</h3>
          <p id='status'></p>
          <br />
          <p id='result_tess'></p>
          <br />
          <h3> Vision API Result:</h3>
          <p id='result_vision'></p>
        </header> */}
      </div>
    );
  }
}

export default App;
