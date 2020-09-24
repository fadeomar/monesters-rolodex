import React from 'react';
import './style.css';

const Card = ({monster}) => {
    return (
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size180x180`} />
            <h2 key={monster.id}>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default Card;