import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Home from './components/Home/Home/Home';
import ApartmentView from './components/ApartmentView/ApartmentView';
import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";
import Footer from './components/shared/Footer/Footer';
import AppBar from './components/shared/NavBar/AppBar';
import Login from './components/Login/Login';
import Service from './components/Service/Service';
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <Router>
      <AppBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route  path="/home/details/:id">
        <ApartmentView />
        </Route>
        <Route  path='/login'>
        <Login />
        </Route>
        <Route path='/service'>
          <Service/>
        </Route>
        <Route  path="*">
          <h1 className='text-center p-5 m-5'>Not Found</h1>
        </Route>
      </Switch>
      <Footer />
    </Router>
    </UserContext.Provider >

  );
};

export default App;