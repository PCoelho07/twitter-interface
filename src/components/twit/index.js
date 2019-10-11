
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faRetweet, faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons'
import './style.css'

export default class Twit extends Component {
  render() {
    return (
      <div className="twit-container">
        <div className="img-profile">
          <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="" />
        </div>
        <div className="twit-content">
          <div className="twit-header">
            <h1>Pedro Coelho</h1>
            <span className="twit-username">@pcoelho</span>
            <span className="twit-time">13 min</span>
          </div>
          <div className="twit-body">
            <p>Em mais uma entrevista, desta vez à TV francesa, Lula disse que o seu único objetivo neste momento é casar-se com a socióloga Rosângela da Silva.</p>
          </div>
          <div className="twit-footer">
            <span className="comments"><FontAwesomeIcon icon={faComment} /> 100</span>
            <span className="retweets"><FontAwesomeIcon icon={faRetweet} />66</span>
            <span className="likes"><FontAwesomeIcon icon={faHeart} />641</span>
            <span className="share"><FontAwesomeIcon icon={faShareSquare} /></span>
          </div>
        </div>
      </div>
    );
  }
}
