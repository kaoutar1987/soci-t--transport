


import React from "react";
import "./app.css";
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/page/Home';
import Contact from "./components/Contact";
import Navbar from './components/layout/Navbar'
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";

function App() {
  return (
    <Router>
       <Navbar />
         <div className="app">
  
         <Switch>
         <Route exact path="/home" component={Home}/>
         <Route exact path="/contact" component={Contact}/>

         </Switch>
        </div>
    </Router>
    
  );
}

export default App;
