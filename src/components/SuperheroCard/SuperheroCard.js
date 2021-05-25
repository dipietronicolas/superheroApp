import React, { useContext } from 'react';
import { SuperheroContext } from '../../context/SuperheroContext';
import { Link } from 'react-router-dom';
import './SuperheroCard.css';

export const SuperheroCard = ({ hero }) => {

  const { removeFromTeam } = useContext(SuperheroContext);

  const handleCloseButton = () => {
    removeFromTeam(hero);
  }

  return (
    <div className={hero.biography.alignment === 'good' ? 'SuperheroCard good' : 'SuperheroCard evil'}>
      <h4>{hero.name}</h4>
      <button 
        className="btn btn-danger SuperheroCard-closeButton"
        onClick={handleCloseButton}>
        <i className="bi bi-x-circle"></i>
      </button>
      <img
        className="SuperheroCard-picture"
        src={hero.image.url}
        alt={`${hero.name}-pic`} />
      <p>Powerstats:</p>
      <ul>
        <li>Combat: <b>{hero.powerstats.combat === 'null' ? 'No hay datos' : hero.powerstats.combat}</b></li>
        <li>Durability:<b>{hero.powerstats.durability === 'null' ? 'No hay datos' : hero.powerstats.durability}</b></li>
        <li>Intelligence: <b>{hero.powerstats.intelligence === 'null' ? 'No hay datos' : hero.powerstats.intelligence}</b></li>
        <li>Power: <b>{hero.powerstats.power === 'null' ? 'No hay datos' : hero.powerstats.power}</b></li>
        <li>Speed: <b>{hero.powerstats.speed === 'null' ? 'No hay datos' : hero.powerstats.speed}</b></li>
        <li>Strength: <b>{hero.powerstats.strength === 'null' ? 'No hay datos' : hero.powerstats.strength}</b></li>
      </ul>
      <Link 
        to={`/superhero/${hero.id}`}
        className="btn btn-success">Ver detalles</Link>
    </div>
  )
}
