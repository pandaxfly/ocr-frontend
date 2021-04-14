import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Divider, Layout, Anchor, Card, Tabs } from 'antd';
import { LinkedinFilled, GithubFilled } from '@ant-design/icons';
import './FixedSlideLayout.css';

import EduExp from '../expedu/ExpEdu.jsx';
import Cert from '../cert/Cert';

class FixedSlideLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: 'all'
    };
  }

  render() {
    const { Content, Footer, Sider } = Layout;
    const { Link } = Anchor;
    const { TabPane } = Tabs;

    const siderStyle = {
      width: '25%',
      height: '100vh',
      overflow: 'auto',
      position: 'fixed',
    };
    

    return (
      <Layout>
        <Sider style={siderStyle}>
          <div className="logo">resume.yuehao.dev<br />(Under Development)</div>

          <Anchor>
            <Link href="#hero" title="Summary" />
            <Link href="#about" title="About" />
            <Link href="#experience" title="Experience" />
            <Link href="#certification" title="Certification" />
          </Anchor>

          <div className="social_media">
            <a href="https://www.linkedin.com/in/yuehao-pan" target="_blank"><LinkedinFilled /></a>
            <a href="https://github.com/pandaxfly" target="_blank"><GithubFilled /></a>
          </div>
          
        </Sider>

        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="site-layout-background" style={{ padding: 60 }}>
              <Row id="hero" align="bottom">
                <Col span={12}>
                  <p id="greeting">Hi, I'm</p>
                  <h1>Pan Yuehao</h1>
                  <hr />
                  <p>Technical Development Lead</p>
                </Col>
                <Col span={12}><img src="/profile.jpg" width="100%"/></Col>

                <Col>
                
                </Col>
              </Row>

              <Row id="about">
                <h2 >About</h2>
                Technical lead of solution delivery team. Responsible for solution design and delivery. Managed and led the onshore development team of 4 members. Analysed user requirement, designed product roadmap and managed client’s expectation on the solutions. Delivered full stack web application based on Java backend and Angular frontend that communicates via REST API. Integrated the solution in fully managed on-prem infrastructure. And led the client value creation by solving complex business problems.
              </Row>
              
              <div id="experience">
                <Divider orientation="left">Experience</Divider>
                <Tabs centered defaultActiveKey="all" onTabClick={(key)=> this.setState({ experience: key })} >
                  <TabPane tab="All" key="all"></TabPane>
                  <TabPane tab="Career" key="career"></TabPane>
                  <TabPane tab="Education" key="education"></TabPane>
                  <TabPane tab="Project" key="project"></TabPane>
                </Tabs>

                <EduExp tab={this.state.experience} />
                 
                <br />
                <br />
              </div>
              
              <Divider orientation="left">Certification</Divider>
              <div id="certification">
                <div className="site-card-wrapper">
                  <Cert />
                </div>
              </div>
              
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>React &#38; Ant Design are used in this page</Footer>
        </Layout>
      </Layout>
    )
  }
}

export default FixedSlideLayout;
