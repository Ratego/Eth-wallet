import {Navbar, Welcome, Footer, Transactions, Services, Loader} from './components';
import { useState } from 'react';

const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar/>
        <Welcome/>
      </div>
      <Transactions/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default App
