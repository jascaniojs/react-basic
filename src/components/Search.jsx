import React, { Component } from 'react';
import '../assets/styles/components/Search.scss';

class Search extends Component {
  render() {
    const title = '¿Qué quieres ver hoy?';
    const searchPlaceholder = 'Buscar...';
    return (
      <section className='main'>
        <h2 className='main__title'>{title}</h2>
        <input type='text' className='input' placeholder={searchPlaceholder} />
      </section>
    );
  }
}

export default Search;
