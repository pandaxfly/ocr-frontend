import React from 'react';

import { Card } from 'antd';
//import {  } from '@ant-design/icons';

import certData from './cert.data'
const certItems = certData;

class CertItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const gridStyle = {
      width: '33.33%',
      textAlign: 'center',
      minHeight: '220px',
    };

    return (
      certItems.map((cert, ind) => {
        return (
          <Card.Grid style={gridStyle}>
            <a href={cert.source} target="_blank" rel="noopener">
              <img className="cert-logo" src={`/logo/${cert.logo}`} alt="mongodb" width="60" height="60" /> 
              <br />
              {cert.title}
              <br />
              {cert.provider}
            </a>
          </Card.Grid>
        );
      })
    )
  }
}

class Cert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CertItem />
      </Card>
    )
  }
}

export default Cert;
