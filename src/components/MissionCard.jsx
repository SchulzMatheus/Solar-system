import React, { Component } from 'react';
import prop from 'prop-types';

export default class PlanetCard extends Component {
  render() {
    const { name, year, country, destination, cardMisClass, mNClass, mYClass, mCClass,
      mDClass } = this.props;
    return (
      <div className={ cardMisClass } data-testid="mission-card">
        <p className={ mNClass } data-testid="mission-name">{ name }</p>
        <hr className="MissionHr" />
        <p className={ mYClass } data-testid="mission-year">{ year }</p>
        <p className={ mCClass } data-testid="mission-country">{ country }</p>
        <p className={ mDClass } data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  name: prop.string,
  year: prop.string,
  country: prop.string,
  destination: prop.string,
  cardMisClass: prop.string,
  mNClass: prop.string,
  mYClass: prop.string,
  mCClass: prop.string,
  mDClass: prop.string,
}.isRequired;
