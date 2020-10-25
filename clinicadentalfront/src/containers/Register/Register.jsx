import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import axios from 'axios';
const layout = {
    labelCol: {
        span: 98,
    },
    wrapperCol: {
        span: 16,
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
        // Vale, en axios el body se le pasa directo por parametro al hacer el POST, ayer
        // me estube pegando con como hacerlo con un GET y es imposible, de ahi me he rallado yo
        
        axios.post('http://localhost:5001/users/registration', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Usuario registrado',description:'Usuario registrado con éxito'})
            }).catch(error => {
                console.log(error)
                notification.error({ message: 'Error en el registro', description: 'Hubo un error al tratar de registrar al usuario, revisa tus campos' })
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
                label="Nombre"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su nombre!',
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
                        message: 'Por favor introduzca su email!',
                    },
                    {
                        type:'email',
                        message: 'El campo debe ser un email',
                    }
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su contraseña!',
                    },
                    {
                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 
                        message: 'Su contraseña debe contener al menos una minúscula, una mayúscula, un número,un carácter especial, y debe estar entre 8 y 10 carácteres de longitud!',
                    }
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    )
}

export default Register;