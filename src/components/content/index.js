import React, { Component } from 'react';

import './style.css'

import HeaderBar from '../header-bar'
import TwitterInput from '../twitter-input'
import Twit from '../twit'


export default class Content extends Component {

  state = {
    twitters: [
      {
        id: 1,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
      {
        id: 2,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
      {
        id: 3,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
      {
        id: 4,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
      {
        id: 5,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
      {
        id: 6,
        nickname: '@pcoelho',
        username: 'Pedro',
        text: 'Isso é um teste',
        likes: 200,
        retweets: 400,
        replies: 100
      },
    ],
  }

  render() {
    const { twitters } = this.state
    return (
      <div className="content">
        <HeaderBar />
        <div className="body">
          <TwitterInput />
          {
            twitters.map(twitter => (
              <Twit
                key={twitter.id}
                nickname={twitter.nickname}
                username={twitter.username}
                text={twitter.text}
                likes={twitter.likes}
                retweets={twitter.retweets}
                replies={twitter.replies}
              />
            ))
          }
        </div>
      </div>
    );
  }
}
