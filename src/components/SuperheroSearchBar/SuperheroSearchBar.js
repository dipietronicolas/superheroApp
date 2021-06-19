import React, { useContext, useEffect } from 'react'
import { SuperheroList } from '../SuperheroList/SuperheroList';
import { SuperheroContext } from '../../context/SuperheroContext';
import Title from '../../assets/superheroapp01.svg';
import './SuperheroSearchBar.css';

export const SuperheroSearchBar = () => {

  // Consumo mi context
  const { getByName, searchResults, setSearchResults } = useContext(SuperheroContext);

  useEffect(() => {
    setSearchResults([]);
  }, [setSearchResults])

  // Funcion que maneja el submit del form
  const handleSearchForm = (e) => {
    e.preventDefault();
    getByName(e.target.id.value);
  }

  // Reinicio los resultados cuando el input esta vacio.
  const handleInput = (e) => {
    e.target.value.length === 0 && setSearchResults([]);
  }


  return (
    <div className="form-container">
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
