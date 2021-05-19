import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './SuperheroList.css';


export const SuperheroList = ({ superheroList }) => {
  return (
    <ul className="list-group col-10 col-sm-6 col-md-4 col-lg-3 form-result mx-auto">
      <Scrollbars style={{ width: "100%", height: "20rem" }}>
        {
          superheroList.map((superhero, idx) => {
            return (
              <li className="list-group-item" key={idx}>
                {superhero.name}
                {/**
               * <img src={superhero.image.url} alt={`${superhero.name}-pic`} />
               */}
              </li>
            )
          })
        }
      </Scrollbars>
    </ul>
  )
}
