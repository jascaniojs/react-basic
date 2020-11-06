import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import Header from '../components/Header';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({ email: '' });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    const { loginRequest, history } = props;
    loginRequest(form).then(history.push('/'));
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia sesión</h2>
          <form onSubmit={handleSubmit} className='login__container--form'>
            <input
              name='email'
              onChange={handleInput}
              className='input'
              type='text'
              placeholder='Correo'
            />
            <input
              onChange={handleInput}
              name='password'
              className='input'
              type='password'
              placeholder='Contraseña'
            />
            <button type='submit' className='button'>
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label>
                <input
                  type='checkbox'
                  id='cbox1'
                  defaultValue='first_checkbox'
                />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={googleIcon} alt='' />
              Inicia sesión con Google
            </div>
            <div>
              <img src={twitterIcon} alt='' />
              Inicia sesión con Twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            <Link to='/register'>Regístrate</Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
