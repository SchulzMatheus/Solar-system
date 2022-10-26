import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

export default class Missions extends Component {
  render() {
    return (
      <div className="missionContent" data-testid="missions">
        <Title titleClass="missionTitle" headline="Missões" />
        {missions.map(({ name, year, country, destination }, count) => (
          <MissionCard
            key={ count }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
            cardMisClass={ `t${count}` }
            mNClass={ `name${count}` }
            mYClass={ `year${count}` }
            mCClass={ `country${count}` }
            mDClass={ `direction${count}` }
          />
        ))}
      </div>
    );
  }
}
