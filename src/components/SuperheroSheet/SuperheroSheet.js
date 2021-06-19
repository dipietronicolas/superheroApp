import React, { useEffect, useContext, useState } from 'react';
import { SuperheroContext } from '../../context/SuperheroContext';
import { useHistory, Link, useParams } from "react-router-dom";

import './SuperheroSheet.css';

export const SuperheroSheet = () => {

  // Local state
  const [superhero, setSuperhero] = useState(null);

  // Historial de navegacion para poder redireccionar
  let history = useHistory();

  // id capturado por parametro de URL
  let { id } = useParams();

  // Consumo mi contexto
  const { getById, addToTeam, isInTeam, isTeamFull } = useContext(SuperheroContext);
  

 

  // Traigo la data de mi superheroe
  useEffect(() => {
    if (id) {
      getById(id)
        .then((result) => {
          console.log(result);
          setSuperhero(result)
        })
        .catch(e => console.log(e));
    }
    // eslint-disable-next-line
  }, [getById])


  // Funcion que carga el superheroe elegido en el context
  const handleAddButton = () => {
    addToTeam(superhero);
    history.push('/');
  }

  return (
    <div className="SuperheroSheet">
      <div className="SuperheroSheet-hero">
        {
          superhero && (
            <>
              <img
                className="SuperheroSheet-img"
                src={superhero.image.url}
                alt={`${superhero.name}-pic`} />
              <div className="SuperheroSheet-profile col-10 col-sm-7 col-lg-6">
                <h1>{superhero.name}</h1>
                <p>Weight: {superhero.appearance.weight[1]}</p>
                <p>Height: {superhero.appearance.height[1]}</p>
                <p>Full name: {superhero.biography['full-name']}</p>
                <p>Eye color: {superhero.appearance['eye-color']}</p>
                <p>Hair color: {superhero.appearance['hair-color']}</p>
                <p>Workplace: {superhero.work.occupation}, {superhero.work.base}</p>
                <p>Powerstats: </p>
                <ul className="pl-4">
                  <li>Combat: <b>{superhero.powerstats.combat}</b></li>
                  <li>Durability:<b>{superhero.powerstats.durability}</b></li>
                  <li>Intelligence: <b>{superhero.powerstats.intelligence}</b></li>
                  <li>Power: <b>{superhero.powerstats.power}</b></li>
                  <li>Speed: <b>{superhero.powerstats.speed}</b></li>
                  <li>Strength: <b>{superhero.powerstats.strength}</b></li>
                </ul>
                <div className="w-100 d-flex justify-content-between">
                  {
                    isTeamFull()
                      ? <button
                          className="btn btn-success"
                          disabled>Team is full</button>
                      : (
                          isInTeam(superhero) 
                            ? <button
                              className="btn btn-success"
                              disabled>Already in team</button>
                            : <button
                              className="btn btn-success"
                              onClick={handleAddButton}>Add to the {superhero.biography.alignment} team!</button>
                      )
                  }
                  
                  <Link
                    className="btn btn-danger"
                    to='/'>Return to home page</Link>
                </div>
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}
