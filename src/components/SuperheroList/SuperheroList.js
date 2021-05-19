import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Link } from 'react-router-dom';
import './SuperheroList.css';


export const SuperheroList = ({ superheroList }) => {
  return (
    <ul className="list-group form-result">
      <Scrollbars style={{ width: "100%", height: "20rem" }}>
        {
          superheroList.map((superhero) => {
            return (
              <li className="list-group-item p-0 search-li" key={superhero.id}>
                <Link 
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    paddingLeft: "1rem",
                    height: "100%"
                  }}
                  to={`superhero/${superhero.id}`}>{superhero.name}</Link>
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
