import {Navbar, Welcome, Footer, Transactions, Services, Loader, Cryptocurrencies} from './components';
import { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Typography, Space, Layout } from antd;

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Transactions/>
      <Cryptocurrencies/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
