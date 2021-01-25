import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <React.Fragment>
      <Router>
       <Navbar></Navbar>
       <Switch>
         <Route path="/" exact component={Home} ></Route>
         <Route path="/services" exact component={Services}></Route>
         <Route path="/products" exact component={Products}></Route>
         <Route path="/sign-up" exact component={SignUp}></Route>
       </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
