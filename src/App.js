import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Login from './Authentication/Login/Login';
import AddBooking from './Service/AddBooking/AddBooking';
import BookingList from './Service/BookingList/BookingList';
import Rent from './Service/Rent/Rent';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider className="App" value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/addBooking">
            <AddBooking/>
          </Route>
          <Route path="/bookingList">
            <BookingList/>
          </Route>
          <Route path="/rent">
            <Rent/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
