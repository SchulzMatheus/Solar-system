import React, { Component } from 'react';
import prop from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage, imgClass, planetContent, nameClass } = this.props;
    return (
      <div className={ planetContent } data-testid="planet-card">
        <p className={ nameClass } data-testid="planet-name">{planetName}</p>
        <img className={ imgClass } src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: prop.string,
  planetImage: prop.string,
  imgClass: prop.string,
  planetContent: prop.string,
  nameClass: prop.string,
}.isRequired;
