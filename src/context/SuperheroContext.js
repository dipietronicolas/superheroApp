import React, { createContext, useState, useEffect } from 'react'

export const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {

  // Estados
  const [URL, setURL] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [goodTeam, setGoodTeam] = useState([]);
  const [evilTeam, setEvilTeam] = useState([]);
  const [teamStats, setTeamStats] = useState([]);

  // Funcion que settea los stats totales del equipo
  useEffect(() => {
    let newStats = [0,0,0,0,0,0], index;
    for (const hero of goodTeam.concat(evilTeam)) {
      index = 0;
      for (const key in hero.powerstats) {
        newStats[index] += Number(hero.powerstats[key] === 'null' ? '0' : hero.powerstats[key])
        console.log(`${key}: ${hero.powerstats[key]}`);
        index++;
      }
    }
    setTeamStats(newStats);
  }, [goodTeam, evilTeam])


  // Funcion que crea la URL a fetchear
  useEffect(() => {
    process.env.NODE_ENV === 'development'
      ? setURL(process.env.REACT_APP_DEVELOPMENT_URL)
      : setURL(process.env.REACT_APP_PRODUCTION_URL)
  }, [])

  // Funcion que busca por nombre, para SuperheroSearchBar
  const getByName = (superheroName) => {
    console.log(URL.concat('/search/', superheroName));
    fetch(URL.concat('/search/', superheroName))
      .then(res => res.json())
      .then(data => { 
        data.results ? setSearchResults(data.results) : setSearchResults([]);
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
    if (superhero.biography.alignment === 'good' && goodTeam.length < 3) {
      setGoodTeam([
        ...goodTeam,
        superhero
      ])
    } else if (superhero.biography.alignment === 'bad' && evilTeam.length < 3){
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

  // Funcion que verifique si el heroe esta en la lista
  const isInTeam = (hero) => {
    if(hero){
      return Boolean(goodTeam.concat(evilTeam).find(e => e.id === hero.id));
    } else {
      return false;
    }
  }

  // Funcion que devuelve true si el equipo esta lleno
  const isTeamFull = () => {
    return goodTeam.concat(evilTeam).length === 6 ? true : false;
  }

  return (
    <SuperheroContext.Provider value={{
      searchResults,
      goodTeam,
      evilTeam,
      teamStats,
      setSearchResults,
      getByName,
      getById,
      addToTeam,
      removeFromTeam,
      isInTeam,
      isTeamFull
    }}>
      { children}
    </SuperheroContext.Provider>

  )
}
