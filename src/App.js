import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './component/pages/Home';
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Navbar from './component/layout/Navbar'
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';
import ViewUser from './component/users/ViewUser';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/user/add' component={AddUser} />
          <Route exact path='/user/edit/:id' component={EditUser} />
          <Route exact path='/user/view/:id' component={ViewUser} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
