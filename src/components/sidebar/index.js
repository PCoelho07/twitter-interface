
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCoffee,
  faHome,
  faHashtag,
  faBell,
  faEnvelope,
  faBookmark,
  faListAlt,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons'

import './style.css';

export default class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar">
        <div className="logo">
          <a href="#">
            <img src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1.png" alt="" />
          </a>
        </div>
        <ul>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faHome} /></span>
              <div>Página inicial</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faHashtag} /></span>
              <div>Explorar</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faBell} /></span>
              <div>Notificações</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faEnvelope} /></span>
              <div>Mensagens</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faBookmark} /></span>
              <div>Itens salvos</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faListAlt} /></span>
              <div>Listas</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faCoffee} /></span>
              <div>Perfil</div>
            </a>
          </li>
          <li>
            <a href="#">
              <span><FontAwesomeIcon icon={faEllipsisH} /></span>
              <div>Mais</div>
            </a>
          </li>
          <li>
            <button>
              Tweetar
            </button>
          </li>
        </ul>
      </aside>
    )
  }
}
