import React from 'react';
import { useParams } from 'react-router-dom';
import './SuperheroSheet.css';

export const SuperheroSheet = () => {

    let { id } = useParams();

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}
