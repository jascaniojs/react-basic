import React from 'react';
import Footer from './Footer';

const Layour = ({ children }) => (
  <div className='App'>
    {children}
    <Footer />
  </div>
);

export default Layour;
