import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage/HomePage';
import {LoginPage}  from './components/LoginPage';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">
      <Header/>
      <LoginPage/>
      <Content/>
      <Footer/>
      
    </div>
  );
}

export default App;