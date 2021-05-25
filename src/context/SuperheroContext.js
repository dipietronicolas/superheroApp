import React, { createContext, useState, useEffect } from 'react'

export const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {

  // Estados
  const [URL, setURL] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [goodTeam, setGoodTeam] = useState([]);
  const [evilTeam, setEvilTeam] = useState([]);

  // Funcion que crea la URL a fetchear
  useEffect(() => {
    process.env.NODE_ENV === 'development'
      ? setURL(process.env.REACT_APP_DEVELOPMENT_URL)
      : setURL(process.env.REACT_APP_PRODUCTION_URL)
  }, [])

  // Funcion que busca por nombre, para SuperheroSearchBar
  const getByName = (superheroName) => {
    fetch(URL.concat('/search/', superheroName))
      .then(res => res.json())
      .then(data => {
        setSearchResults(data.results);
      })
      .catch(e => console.log(e));
  }

  // Funcion que busca por ID, para el detalle del heroe
  const getById = async (superheroId) => {
    const fetchedData = await fetch(URL.concat('/', superheroId));
    const data = await fetchedData.json();
    console.log(data);
    return data;
  }

  // Funcion que agrega un heroe a nuestro equipo
  const addToTeam = (superhero) => {
    if (superhero.biography.alignment === 'good') {
      setGoodTeam([
        ...goodTeam,
        superhero
      ])
    } else {
      setEvilTeam([
        ...evilTeam,
        superhero
      ])
    }
  }

  // Funcion que borra un heroe de nuestro equipo
  const removeFromTeam = (superhero) => {
    if (superhero.biography.alignment === 'good') {
      setGoodTeam(
        goodTeam.filter((hero) => {
          return hero.id !== superhero.id
        })
      );
    } else {
      setEvilTeam(
        evilTeam.filter((hero) => {
          return hero.id !== superhero.id
        })
      )
    }
  }

  return (
    <SuperheroContext.Provider value={{
      searchResults,
      goodTeam,
      evilTeam,
      setSearchResults,
      getByName,
      getById,
      addToTeam,
      removeFromTeam
    }}>
      { children}
    </SuperheroContext.Provider>

  )
}
