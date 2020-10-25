import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Containers/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './Containers/Login/Login'
import axios from 'axios';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import NewAppointment from './Containers/NewAppointment/NewAppointment';
import ShowAppointments from './Containers/ShowAppointments/ShowAppointments';


function App() {
  let initialUser = null;
  try {
    initialUser = JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    console.error(error)
  }
  const [user, setUser] = useState(initialUser);

 
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
        <Route path='/' component={Home} exact />
        <Route path='/login' exact>
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path='/register' component={Register} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/profile/newappointment' component={NewAppointment} exact />
        <Route path='/profile/showappointments' component={ShowAppointments} />
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
