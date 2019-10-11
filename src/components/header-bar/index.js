import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default class HeaderBar extends Component {
  render() {
    return (
      <div className="header">
        <h1>Página inicial</h1>
        <div>
          <FontAwesomeIcon icon={faSun} />
        </div>
      </div>
    );
  }
}
