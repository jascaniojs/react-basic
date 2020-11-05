import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layour = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layour;
