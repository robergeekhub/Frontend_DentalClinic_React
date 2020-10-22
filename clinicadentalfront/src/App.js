import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Home from './Containers/Home/Home'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Login from './containers/Login/Login'

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/login' exact ><Login setUser={setUser} /></Route>
    </Switch>
    <Footer />
  </BrowserRouter>
  );
}

export default App;
