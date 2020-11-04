import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, titleCategorie }) => {
  return (
    <div className='categories'>
      <h3 className='categories__title'>{titleCategorie}</h3>
      {children}
    </div>
  );
};

export default Categories;
