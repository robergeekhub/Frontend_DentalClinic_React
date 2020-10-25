import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import './Login.scss';
const Login = ({setUser}) => {
    const history = useHistory();
    const handleSubmit = event =>{
        event.preventDefault(); // para evitar refrescar la página
        const user ={
            email:event.target.email.value,
            password:event.target.password.value
        };
        axios.post('http://localhost:5000/users/login',user)
        .then(res=>{
            console.log(res.data)
            setUser(res.data.user) //seteo el user como estado del App.js
            localStorage.setItem('authToken',JSON.stringify(res.data.token));
            localStorage.setItem('user',JSON.stringify(res.data.user))
            setTimeout(() => {
                history.push('/profile')
            }, 1000);
        })
        .catch(error=>console.log(error))
    }
    return (
        
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Enter your email" />
            <input type="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">Log in</button>
        </form>
        
    )
}

export default Login

