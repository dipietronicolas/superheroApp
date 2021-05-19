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
      .then(data => setSearchResult(data.results))
      .catch(e => console.log(e));
  }

  return (
    <div className="jumbotron form-container">
      <form className="form-inline col-12 col-sm-10 col-lg-4 mx-auto p-0 d-flex" onSubmit={handleSearchForm}>
        <div className="form-group d-flex mx-auto">
          <input className="form-control" type="text" name="id" autoFocus></input>
          <button className="btn btn-primary" type="submit">Search</button>
        </div>
      </form>
      {
        searchResult
        && <SuperheroList superheroList={searchResult} />
      }
    </div>
  )
}
