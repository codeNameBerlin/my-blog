import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ArticlesListPage from './containers/ArticlesListPage';
import ArticlePage from './containers/ArticlePage';
import NavBar from './containers/NavBar';
import NotFoundPage from './containers/NotFoundPage';
import {
  BrowserRouter as Router,
  Route, 
  Switch,
} from 'react-router-dom'

class App extends Component {
  render() {
     return (
      <Router>
        <div className="App">
        <NavBar />
        <div id='page-body'>
        <Switch>
           <Route path='/' component={HomePage} exact />
           <Route path='/about' component={AboutPage} />
           <Route path='/articles-list' component={ArticlesListPage} />
           <Route path='/article/:name' component={ArticlePage} />
           <Route component={NotFoundPage} /> 
         {/* This has to be last for the switch component to work */}
        </Switch>
        </div>
        </div>
      </Router>
   );
  }
}

export default App;
