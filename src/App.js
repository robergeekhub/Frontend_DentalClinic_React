import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Containers/Home/Home'
import Login from './Containers/Login/Login'
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';
import NewAppointment from './Containers/NewAppointment/NewAppointment';
import ShowAppointments from './Containers/ShowAppointments/ShowAppointments';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={Login} exact />
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
