import React, { useContext, useEffect } from 'react'
import { SuperheroList } from '../SuperheroList/SuperheroList';
import { SuperheroContext } from '../../context/SuperheroContext';
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';
import Title from '../../assets/superheroapp01.svg';
import './SuperheroSearchBar.css';

export const SuperheroSearchBar = () => {

  let history = useHistory();

  // Consumo mi context
  const { getByName, searchResults, setSearchResults } = useContext(SuperheroContext);
  const { logout, isLogged } = useContext(AuthContext);

  useEffect(() => {
    setSearchResults([]);
  }, [setSearchResults])

  useEffect(() => {
    !isLogged && history.push('/');
    // eslint-disable-next-line
  }, [])

  // Funcion que maneja el submit del form
  const handleSearchForm = (e) => {
    e.preventDefault();
    getByName(e.target.id.value);
  }

  // Reinicio los resultados cuando el input esta vacio.
  const handleInput = (e) => {
    e.target.value.length === 0 && setSearchResults([]);
  }

  // Funcion que maneja el logOut
  const handleLoggout = () => {
    logout();
    history.push('/');
  }


  return (
    <div className="form-container">
      <button
        className="logout-btn"
        onClick={handleLoggout}>Logout</button>
      <img
        className="col-12 col-sm-10 col-lg-8 col-xl-6"
        src={Title} alt='page title' />
      <form className="search-form" onSubmit={handleSearchForm}>
        <input
          className="form-control col-9"
          type="text"
          name="id"
          onChange={handleInput}
          autoFocus />
        <button
          className="btn btn-success"
          type="submit">Search</button>
      </form>
      {
        searchResults.length > 0
        && <SuperheroList superheroList={searchResults} />
      }
    </div>
  )
}
