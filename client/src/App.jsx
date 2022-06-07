import {Navbar, Welcome, Footer, Transactions, Services, Loader } from './components';
import { useState } from 'react';
import { Typography, Space, Layout } from 'antd';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Transactions/>
      {/*<Homepage />
      <Exchanges />
      <Cryptocurrencies/>
      <CryptoDetails />
  <News />*/}
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
