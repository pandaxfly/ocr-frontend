import React from 'react';

import { Card, Typography } from 'antd';
//import {  } from '@ant-design/icons';

import certData from './cert.data'
const certItems = certData;

class Cert extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { Text } = Typography;
    const containerStyle = {
      alignItems: 'center',
    };
    const gridStyle = {
      textAlign: 'center',
      width: '33.33%',
      fontSize: '13px',
      minHeight: '188px',
    };

    return (
      <Card style={containerStyle}>
        {certItems.map((cert, ind) => {
        return (
          <Card.Grid key={ind+1} style={gridStyle}>
            <a href={cert.source} target="_blank" rel="noopener">
              <img className="cert-logo" src={`/logo/${cert.logo}`} alt={cert.logoAlt} width="60" height="60" /> 
              <br />
              <Text>{cert.title}</Text>
              <br />
              <Text type="secondary" style={{fontSize: '12px'}}>{cert.provider}</Text>
            </a>
          </Card.Grid>
        );
      })}
      </Card>
    )
  }
}

export default Cert;
