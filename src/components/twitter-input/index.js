import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage, faSmile, faSun } from '@fortawesome/free-solid-svg-icons'

import './style.css'

export default class TwitterInput extends Component {
  render() {
    return (
      <div className="input-container">
        <div className="img-profile">
          <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="" />
        </div>
        <div className="twitter-input">
          <div className="input-wrapper">
            <input type="text" placeholder="O que está acontecendo?" />
          </div>
          <div className="twitter-input-actions">
            <div className="aux-buttons">
              <FontAwesomeIcon icon={faImage} />
              <FontAwesomeIcon icon={faSmile} />
              <FontAwesomeIcon icon={faSun} />
            </div>
            <button>Tweetar</button>
          </div>
        </div>
      </div>
    );
  }
}
