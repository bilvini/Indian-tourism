// src/components/DestinationCard.js
import React from 'react';

function DestinationCard({ destination }) {
    return (
        <div className="destination-card">
            <img src={destination.image} alt={destination.name} />
            <h3>{destination.name}</h3>
            <p>{destination.description}</p>
            <button>Learn More</button>
        </div>
    );
}

export default DestinationCard;
