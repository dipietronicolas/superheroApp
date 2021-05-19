import React, { useState } from 'react'
import { SuperheroList } from '../SuperheroList/SuperheroList';
import './SuperheroSearchBar.css';

export const SuperheroSearchBar = () => {

  // Datos recuperados del fetch a la superheroAPI
  const [searchResult, setSearchResult] = useState([]);

  // Funcion que crea la URL a fetchear
  const getURL = ( superheroName ) => {
    let URL = '';
    process.env.NODE_ENV === 'development'
      ? URL = process.env.REACT_APP_DEVELOPMENT_URL.concat('/search/', superheroName)
      : URL = process.env.REACT_APP_PRODUCTION_URL.concat('/search/', superheroName)
    return URL;
  }

  // Funcion que maneja el submit del form
  const handleSearchForm = (e) => {
    e.preventDefault();
    fetch(getURL(e.target.id.value))
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setSearchResult(data.results);
      })
      .catch(e => console.log(e));
  }

  // Reinicio los resultados cuando el input esta vacio.
  const handleInput = (e) => {
    e.target.value.length === 0 && setSearchResult([]);
  }

  return (
    <div className="jumbotron form-container">
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
        searchResult
        && <SuperheroList superheroList={searchResult} />
      }
    </div>
  )
}
