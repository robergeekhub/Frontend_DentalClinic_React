import React from 'react';
import axios from 'axios';
import './Login.scss';
import {useHistory} from 'react-router';
import {notification} from 'antd';
import {} from 'react-router-dom';


const Login = ({setClient}) => {
    const history = useHistory();
    const handleSubmit = event =>{
      event.preventDefault(); // to prevent refreshing the page
      const client ={
          email:event.target.email.value,
          password:event.target.password.value
      };
      console.log(client)
      axios.post('http://localhost:8000/api/login', client)
      .then(res=>{
          console.log('axios done')
          localStorage.setItem('authToken',res.data.token);
          localStorage.setItem('client',JSON.stringify(res.data))
          
          notification.success({message:'Welcome!',description:'Welcome to our application! '+client.email})
          
          setTimeout(() => {
              history.push('/profile')
          }, 1000);
      })
      .catch(error=> {throw (error)})
  }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Enter your email" />
            <input type="password" name="password" required placeholder="Enter your password"/>
            <button type="submit">Login</button>
        </form>
        
    )
}

export default Login

