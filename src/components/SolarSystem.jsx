import React, { Component } from 'react';
import Title from './Title';
import planetList from '../data/planets';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div className="conteinerPlanet" data-testid="solar-system">
        <Title headline="Planetas" titleClass="planetTitle" />
        {planetList.map(({ name, image }, count) => (
          <PlanetCard
            key={ count }
            planetName={ name }
            planetImage={ image }
            imgClass={ `img${name}` }
            nameClass={ `${name}` }
            planetContent={ `div${name}` }
          />
        ))}
      </div>
    );
  }
}
