// src/pages/Destinations.js
import React, { useState, useEffect } from 'react';
import DestinationCard from '../components/DestinationCard';
import Spinner from '../components/Spinner';

const destinations = [
    { name: 'Goa', description: 'Famous for its beaches and nightlife.', image: 'goa.jpg' },
    { name: 'Jaipur', description: 'Known as the Pink City with rich history.', image: 'jaipur.jpg' },
    { name: 'Kerala', description: 'Famous for its backwaters and houseboats.', image: 'kerala.jpg' },
    { name: 'Agra', description: 'Home of the Taj Mahal.', image: 'agra.jpg' },
    { name: 'Varanasi', description: 'Spiritual city on the banks of the Ganges.', image: 'varanasi.jpg' },
];

function Destinations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        
        return () => clearTimeout(timer);
    }, []);

    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section id="destinations">
            <h2>Popular Destinations</h2>
            <input
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {loading ? (
                <Spinner />
            ) : (
                <div className="destination-list">
                    {filteredDestinations.map((destination, index) => (
                        <DestinationCard key={index} destination={destination} />
                    ))}
                </div>
            )}
        </section>
    );
}

export default Destinations;
