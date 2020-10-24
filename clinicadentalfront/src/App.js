import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Containers/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './Containers/Login/Login'
import axios from 'axios';
import Register from './Containers/Register/Register';

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  useEffect(() => {
    const token = localStorage.getItem('authToken')
    axios.get(process.env.REACT_APP_BASE_URL + '/users/profile',
      {
        headers: {
          Authorization: token
        }
      })
      .then(res => {
        setUser(res.data)
      })
  }, [])

  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/login' exact ><Login setUser={setUser} /></Route>
      <Route path='/register' component={Register} exact />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
