import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './LoginForm.css';

export const LoginForm = () => {

  const { getLog } = useContext(AuthContext);

  let history = useHistory();

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      getAuthToken(values.email, values.password);
    },
  });
  // URL: http://challenge-react.alkemy.org/
  // email: challenge@alkemy.org
  // password: react
  const getAuthToken = (email, password) => {
    axios.post('http://challenge-react.alkemy.org/', {
      email: email,
      password: password
    })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        history.push('/search/');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    getLog() && history.push('/search/');

    // eslint-disable-next-line
  }, [])

  return (
    <div className="LoginForm mx-auto col-10 col-sm-7 col-md-5 col-lg-4">
      <h1 className="display-4">Login</h1>
      <hr></hr>
      <form className="form-group LoginForm-form" onSubmit={handleSubmit}>
        <input
          className="form-control"
          type="email"
          name="email"
          placeholder="Type your email"
          onChange={handleChange}
          value={values.email}
          autoFocus />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          onChange={handleChange}
          value={values.password} />
        <button
          className="btn btn-primary"
          type="submit">Log in</button>
      </form>
      <button
        className="btn btn-warning"
        type="button"
        data-toggle="collapse"
        data-target="#collapseExample"
        aria-expanded="false"
        aria-controls="collapseExample">
        Click aqui para obtener un usuario
      </button>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          Este es el desafio de ReactJs para alkemy, se me pidio que lo realice utilizando Bootstrap, Formik, Axios y 
          la <a href="https://superheroapi.com/" target="_blank" rel="noreferrer">superheroAPI</a><br />
          El usuario y contraseña es proporcionado por alkemy, y una url que devuelve un token de autenticacion 
          al hacer una peticion post. Ese token protege las rutas.
          <hr />user: challenge@alkemy.org
          <br />pass: react
        </div>
      </div>
    </div>
  )
}
