import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
import './Register.scss';
import 'antd/dist/antd.css';

const layout = {
    labelCol: {
        span: 90,
    },
    wrapperCol: {
        span: 17,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Register = () => {
    const onFinish = (user) => {
        
        axios.post('http://localhost:8000/api/register', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'registered user',description:'Registered user successfully'})
            }).catch(error => {
                console.log(error)
                notification.error({ message: 'Registry error', description: 'There was an error trying to register the user, check your fields' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your email!',
                    },
                    {
                        type:'email',
                        message: 'The field must be an email',
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please enter your password!',
                    },
                    {
                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 
                        message: 'Your password must contain at least one lower case, one upper case, one number, one special character, and must be between 8 and 10 characters in length!',
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Register
        </Button>
            </Form.Item>
        </Form>
    )
}

export default Register;