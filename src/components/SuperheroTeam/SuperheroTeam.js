import React, { useContext } from 'react';
import { SuperheroContext } from '../../context/SuperheroContext';
import { SuperheroCard } from '../SuperheroCard/SuperheroCard';
import './SuperheroTeam.css';

export const SuperheroTeam = () => {

  const { goodTeam, evilTeam, teamStats } = useContext(SuperheroContext);

  return (
    goodTeam.concat(evilTeam).length > 0 && (
      <div className="SuperheroTeam col-12">
        <h1 className="display-4">My team</h1>
        <ul className="SuperheroTeam-stats">
          <li>Intelligence: <b>{teamStats[0]}</b></li>
          <li>Strength: <b>{teamStats[1]}</b></li>
          <li>Speed: <b>{teamStats[2]}</b></li>
          <li>Durability:<b>{teamStats[3]}</b></li>
          <li>Power: <b>{teamStats[4]}</b></li>
          <li>Combat: <b>{teamStats[5]}</b></li>
        </ul>
        <div className="SuperheroTeam-cardContainer">
          {
            goodTeam.concat(evilTeam).map((hero, id) => {
              return <SuperheroCard hero={hero} key={id} />
            })
          }
        </div>
      </div>
    )
  )
}
