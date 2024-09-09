// src/components/DestinationsSection.js
import React from 'react';
import './DestinationsSection.css';
import {
  parisImage,
  newYorkImage,
  tokyoImage,
  londonImage,
  romeImage,
  barcelonaImage,
  losAngelesImage,
  sanFranciscoImage,
  bangkokImage,
  dubaiImage,
  sydneyImage,
  rioDeJaneiroImage
} from '../assets/images';

const destinations = [
  { name: 'Paris', image: parisImage, description: 'The city of lights.' },
  { name: 'New York', image: newYorkImage, description: 'The city that never sleeps.' },
  { name: 'Tokyo', image: tokyoImage, description: 'A bustling metropolis.' },
  { name: 'London', image: londonImage, description: 'The capital of England, known for its rich history and landmarks.' },
  { name: 'Rome', image: romeImage, description: 'The Eternal City, famous for its ancient ruins and Vatican City.' },
  { name: 'Barcelona', image: barcelonaImage, description: 'A city known for its unique architecture and vibrant culture.' },
  { name: 'Los Angeles', image: losAngelesImage, description: 'The entertainment capital of the world, home to Hollywood.' },
  { name: 'San Francisco', image: sanFranciscoImage, description: 'Known for the Golden Gate Bridge and its historic cable cars.' },
  { name: 'Bangkok', image: bangkokImage, description: 'A city of vibrant street life and ornate temples.' },
  { name: 'Dubai', image: dubaiImage, description: 'A city known for its modern architecture and luxury shopping.' },
  { name: 'Sydney', image: sydneyImage, description: 'Famous for the Sydney Opera House and beautiful beaches.' },
  { name: 'Rio de Janeiro', image: rioDeJaneiroImage, description: 'Known for its Carnival festival and Christ the Redeemer statue.' }
];

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destinations-section">
      <h2>Popular Destinations</h2>
      <div className="destinations-grid">
        {destinations.map((dest, index) => (
            <div key={index} className="destination-card">
              <img src={dest.image} alt={dest.name} />
              <div className="destination-info">
                <h3>{dest.name}</h3>
                <p>{dest.description}</p>
              </div>
            </div>
          
        ))}
      </div>
    </section>
  );
};

export default DestinationsSection;