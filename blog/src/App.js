import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ArticlesListPage from './components/ArticlesListPage';
import ArticlePage from './components/ArticlePage';
import NavBar from './components/NavBar';
import NotFoundPage from './components/NotFoundPage';
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
