import React from 'react';

import { Timeline, Collapse, Tag } from 'antd';
import { IdcardOutlined, ReadOutlined, LaptopOutlined } from '@ant-design/icons';

import expEduData from './expedu.data'

const expEduItems = expEduData;

class Highlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.items)
    return (
      this.props.items.map((highlight, index) => {
        return (
          <a key={index} href={highlight.url} target="_blank" rel="noreferrer noopener">
            {highlight.title}
            <Tag color="success">{highlight.area}</Tag>
            <br />
          </a>
          
        )
      })
    )
  }
}

class ExpEduItem extends React.Component {
  
  genExtra() {
    return (
      <div className="panel-header" onClick={event => {
        // If you don't want click extra trigger collapse, you can prevent this:
        // event.stopPropagation();
        }}
      >
      </div>
    ) 
  };

  render() {
    return (
      expEduItems.map((exp, ind) => {
        let timelineMap = new Map([
          ['experience', [<IdcardOutlined />, "blue"]],
          ['education', [<ReadOutlined />, "green"]],
          ['project',  [<LaptopOutlined />, "grey"]],
        ])
        
        return (
          <Timeline.Item key={ind+1} dot={timelineMap.get(exp.type)[0]} color={timelineMap.get(exp.type)[1]}> 
            <Collapse accordion ghost>                    
              <Collapse.Panel showArrow={false} header={exp.title + ", " + exp.organization} key={ind+1} extra={this.genExtra()}>
                <div className="panel-content">
                  <p>{exp.year}</p>
                  <p>{exp.description}</p>
                  <p><Highlights items={exp.highlights}/></p>
                </div>
              </Collapse.Panel>
            </Collapse>
          </Timeline.Item>
        )
      })
    )
  }
}

class ExpEdu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Timeline>
        <ExpEduItem name="noname"/>
      </Timeline>
    )
  }

}

export default ExpEdu;
