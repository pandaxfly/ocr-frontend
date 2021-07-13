import React from 'react';
import 'antd/dist/antd.css';
import { Typography, Row, Col, Divider, Layout, Anchor, Space, Button, Tabs, Card, BackTop } from 'antd';
import { LinkedinFilled, GithubFilled, MailOutlined } from '@ant-design/icons';
import './FixedSlideLayout.css';

import EduExp from '../expedu/ExpEdu.jsx';
import Cert from '../cert/Cert';
import ContactForm from '../contact/ContactForm';

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
    axios.get('/doc/PAN_Yuehao_CV.pdf', {
      responseType: 'blob'
    })
    .then(res => {
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'PAN_Yuehao_CV.pdf');
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

    const colorWhite = {
      color: 'white'
    }
    
    return (
      <Layout>
        <Sider style={siderStyle}>
          {/* <div className="logo">resume.yuehao.dev<br />(Under Development)</div> */}

          <Anchor className="page-anchor">
            <Link href="#hero" title="Summary" style={colorWhite}/>
            <Link href="#about" title="About" style={colorWhite}/>
            <Link href="#experience" title="Experience" style={colorWhite}/>
            <Link href="#certification" title="Certification" style={colorWhite}/>
            <Link href="#contact" title="Contact" style={colorWhite}/>
          </Anchor>

          <div className="social_media">
          <Space size="middle"> 
            <Button type="default" href="https://www.linkedin.com/in/yuehao-pan" target="_blank" ghost><LinkedinFilled /></Button>
            <Button type="default" href="https://github.com/pandaxfly" target="_blank" ghost><GithubFilled  /></Button>
            <Button type="default" href = "mailto: yuehao.pan92@gmail.com" ghost><MailOutlined /></Button>
          </Space>
            
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
                  <Text type="secondary">
                    Technical Delivery Lead <br /> 
                    Cloud Advocate <br /> 
                    2x GCP | CKA
                  </Text>
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
              <div id="about"> <br />
                {/* <Divider orientation="left"><Title level={3}>About</Title></Divider> */}
                <Paragraph>
                  Five years’ experience in technology consulting, specialized in delivering enterprise technical solution implementations. Cloud advocate who is passionate in data science. Linux Foundation Certified Kubernetes Administrator, Google certified Associate Cloud Engineer and Professional Machine Learning Engineer.
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

              <Divider orientation="left"><Title level={3}>Contact</Title></Divider>
              <div id="contact">
                <Row gutter={16} align="top">
                  <Col span={12}>
                    <ContactForm />
                  </Col>
                  <Col span={12}>
                    <Card className="contact-image-background">
                      <p className='contact-title'><b>Let's Talk!</b></p>
                      <p></p>
                      <div className="contact-info">
                        <p>(65) 9075 3719</p>
                        <p>yuehao.pan@gmail.com</p>
                        <p>28B Jln Lempeng, Singapore</p>
                      </div>
                    </Card>
                    
                  </Col>
                </Row>
                
              </div>
              
            </div>
          </Content>
          <BackTop />
          <Footer style={{ textAlign: 'center' }}>React &#38; Ant Design are used in this page</Footer>
        </Layout>
      </Layout>

      
    )
  }
}

export default FixedSlideLayout;
