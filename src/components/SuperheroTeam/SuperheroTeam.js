import React, { useContext, useEffect } from 'react';
import { SuperheroContext } from '../../context/SuperheroContext';
import { SuperheroCard } from '../SuperheroCard/SuperheroCard';
import './SuperheroTeam.css';

export const SuperheroTeam = () => {

  const { goodTeam, evilTeam } = useContext(SuperheroContext);

  useEffect(() => {
    console.log(goodTeam);
    console.log(evilTeam);
  }, [goodTeam, evilTeam])

  return (
    goodTeam.concat(evilTeam).length > 0 && (
      <div className="SuperheroTeam">
        {
          goodTeam.concat(evilTeam).map((hero, id) => {
            return <SuperheroCard hero={hero} key={id} />
          })
        }
      </div>
    )
  )
}
