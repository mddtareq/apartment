import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useState } from 'react';
import Signin from './Authentication/Signin/Signin';
import Login from './Authentication/Login/Login';


export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider className="App" value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/">
            <Login/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
