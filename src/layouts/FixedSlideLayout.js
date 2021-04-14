import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Row, Col, Divider, Layout, Anchor, Tabs } from 'antd';
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

  continueScroll = (e) => {
    const scrollPos = document.getElementById('about').getBoundingClientRect()
    window.scrollTo({
      top: scrollPos.top,
      behavior: 'smooth'
    });
  }

  downloadResume = (e) => {
    const axios = require('axios');
    axios.get('/doc/PAN_Yuehao_Resume.pdf', {
      responseType: 'blob'
    })
    .then(res => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'PAN_Yuehao_Resume.pdf');
      link.click();
    });
  }

  render() {
    const { Title, Paragraph, Text } = Typography;
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
                  <Title>Pan Yuehao</Title>
                  <hr />
                  <Text type="secondary">(Ex-)Development Team Lead in IT Consulting Firm</Text>
                  <br />
                  <br />
                </Col>
                <Col span={12}><img src="/profile.jpg" width="100%"/></Col>
              </Row>

              <Row className="text-center box" justify="center" style={{ alignItems: "center" }}>
                <Col span={12} className="box-primary" onClick={this.downloadResume}>
                  <br />DOWNLOAD RESUME<br /><br />
                </Col>
                <Col span={12} className="box-default" onClick={this.continueScroll}>
                  <br />VIEW PORTFOLIO<br /><br />
                </Col>
              </Row>
              <br />
              <div id="about">
                <Divider orientation="left"><Title level={3}>About</Title></Divider>
                <Paragraph>
                  Solution delivery lead in IT consulting. Past experience in digital government transformation. Passionate in engineering and science.
                </Paragraph>
              </div>
              
              <div id="experience">
                <Divider orientation="left"><Title level={3}>Experience</Title></Divider>
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
              
              <Divider orientation="left"><Title level={3}>Certification</Title></Divider>
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
