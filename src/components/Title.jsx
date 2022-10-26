import React, { Component } from 'react';
import prop from 'prop-types';

export default class Title extends Component {
  render() {
    const { headline, titleClass } = this.props;
    return (
      <h2 className={ titleClass }>{headline}</h2>
    );
  }
}
Title.propTypes = {
  headline: prop.string,
  titleClass: prop.string,
}.isRequired;
