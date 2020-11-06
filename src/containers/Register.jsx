import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({ email: '', name: '', password: '' });

  const handleInput = (event) => {
    event.preventDefault();
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    const { registerRequest, history } = props;
    event.preventDefault();
    registerRequest(form);
    history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form onSubmit={handleSubmit} className='register__container--form'>
            <input
              name='name'
              onChange={handleInput}
              className='input'
              type='text'
              placeholder='Nombre'
            />
            <input
              name='email'
              onChange={handleInput}
              className='input'
              type='text'
              placeholder='Correo'
            />
            <input
              name='password'
              onChange={handleInput}
              className='input'
              type='password'
              placeholder='Contraseña'
            />
            <button type='submit' className='button'>
              Registrarme
            </button>
          </form>
          <Link to='/login'>Iniciar sesión</Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
