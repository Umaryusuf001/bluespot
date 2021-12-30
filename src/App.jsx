import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import About from './pages/Home/About';

const App = () => {
  return (
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Route path='/about' component={About}/>
        <Redirect to='/' />
      </Switch>

      <footer className='footer'>
        &copy; 2022 Umar's blog. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
