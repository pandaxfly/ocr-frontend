import React from 'react';

import { Form, Input, Button  } from 'antd';
import { SmileOutlined, MailOutlined } from '@ant-design/icons';

const CONTACT_ENDPOINT = 'http://ec2-18-141-185-52.ap-southeast-1.compute.amazonaws.com:3000/api/send-message'

class Cert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event) {
    this.setState({name: event.name});
    this.setState({email: event.email});
    this.setState({message: event.message});

    const axios = require('axios');
    axios.post(CONTACT_ENDPOINT, {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    })
    .then(function (response) {
      console.log(response);
      alert('Thank you, I will reply you soon.');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <Form onFinish={this.sendMessage}>
        <Form.Item name="name" rules={[{ required: true, message: 'Please let me know your name.' }]}>
          <Input prefix={<SmileOutlined className="site-form-item-icon" />} placeholder="Name*" />
        </Form.Item>

        <Form.Item name="email" rules={[{ type: 'email', required: true, message: 'Let me know your email to get you back.' }]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email*" />
        </Form.Item>

        <Form.Item name='message' rules={[{ type: 'string', required: true}]}>
          <Input.TextArea placeholder="Message*" autoSize={{ minRows: 3, maxRows: 4 }}/>
        </Form.Item>

        <Form.Item>
          <Button type="ghost" htmlType="submit" className='send-message'>
            Send Message
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Cert;