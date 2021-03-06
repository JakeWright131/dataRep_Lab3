import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Creates the single page application
//application displays text and the time

//imports component from react
//imports header, content and footer components
//navbar is displayed on the web application for navigation
//added routing to the web application


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </Switch>
        </div>
      </Router>
    );
  }

}


export default App;
